package models

import (
	"database/sql"
	"os"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

type sqliteHandler struct {
	db *sql.DB
}

func (m *sqliteHandler) getTodos() []*Todo {
	list := []*Todo{}

	r, err := m.db.Query(`
		SELECT 
			id, name, completed, createdAt 
		FROM todos
	`)
	defer r.Close()

	for r.Next() {
		todo := new(Todo)
		r.Scan(&todo.ID, &todo.Name, &todo.Completed, &todo.CreatedAt)
		list = append(list, todo)
	}

	if err != nil {
		panic(err)
	}

	return list
}

func (m *sqliteHandler) getTodosMap() map[int]*Todo {
	list := m.getTodos()
	todomap := make(map[int]*Todo)

	for _, l := range list {
		var todo = &Todo{l.ID, l.Name, l.Completed, l.CreatedAt}
		todomap[todo.ID] = todo
	}

	return todomap
}

func (m *sqliteHandler) addTodo(name string) *Todo {
	pstmt, err := m.db.Prepare(`
		INSERT INTO todos (
			name, completed, createdAt
		) VALUES (
			?, ?, datetime('now')
		)
	`)
	defer pstmt.Close()
	result, err := pstmt.Exec(name, false)
	id, err := result.LastInsertId()

	todo := new(Todo)
	todo.ID = int(id)
	todo.Name = name
	todo.Completed = false
	todo.CreatedAt = time.Now()

	if err != nil {
		panic(err)
	}

	return todo
}

func (m *sqliteHandler) removeTodo(id int) bool {
	pstmt, err := m.db.Prepare(`
		DELETE FROM todos
			WHERE id = ?
	`)
	defer pstmt.Close()
	result, err := pstmt.Exec(id)
	affected, err := result.RowsAffected()

	if err != nil {
		panic(err)
	}

	if affected == 1 {
		return true
	}

	return false
}

func (m *sqliteHandler) updateTodo(id int) bool {
	pstmt, err := m.db.Prepare(`
		UPDATE todos 
			SET completed = 
				CASE WHEN completed = 'true' 
					THEN 'false'
					ELSE 'true'
				END
			WHERE id = ?
	`)
	defer pstmt.Close()
	result, err := pstmt.Exec(id)
	affected, err := result.RowsAffected()

	if err != nil {
		panic(err)
	}

	if affected == 1 {
		return true
	}

	return false
}

func (m *sqliteHandler) closeDB() {
	m.db.Close()
}

func newSqliteHandler() dbHandler {
	dbname := os.Getenv("DB_DATABASE")
	db, err := sql.Open("sqlite3", dbname)
	pstmt, err := db.Prepare(`
		CREATE TABLE IF NOT EXISTS todos (
			id			INTEGER PRIMARY KEY AUTOINCREMENT,
			name		TEXT,
			completed	BOOLEAN,
			createdAt	DATETIME
		)
	`)

	pstmt.Exec()

	if err != nil {
		panic(err)
	}

	return &sqliteHandler{db: db}
}
