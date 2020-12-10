package models

import (
	"database/sql"
	"os"
	"time"

	// sqlite3 orm
	_ "github.com/mattn/go-sqlite3"
)

type sqliteHandler struct {
	db *sql.DB
}

func (m *sqliteHandler) getTodos(userID string) []*Todo {
	list := []*Todo{}

	r, err := m.db.Query(`
		SELECT 
			id, user_id, name, completed, createdAt 
		FROM todos
		WHERE user_id = ?
	`, userID)
	defer r.Close()

	for r.Next() {
		todo := new(Todo)
		r.Scan(&todo.ID, &todo.UserID, &todo.Name, &todo.Completed, &todo.CreatedAt)
		list = append(list, todo)
	}

	if err != nil {
		panic(err)
	}

	return list
}

func (m *sqliteHandler) getTodosMap(userID string) map[int]*Todo {
	list := m.getTodos(userID)
	todomap := make(map[int]*Todo)

	for _, l := range list {
		if l.UserID == userID {
			var todo = &Todo{l.ID, l.UserID, l.Name, l.Completed, l.CreatedAt}
			todomap[todo.ID] = todo
		}
	}

	return todomap
}

func (m *sqliteHandler) addTodo(name string, userID string) *Todo {
	pstmt, err := m.db.Prepare(`
		INSERT INTO todos (
			user_id, name, completed, createdAt
		) VALUES (
			?, ?, ?, datetime('now')
		)
	`)
	defer pstmt.Close()
	result, err := pstmt.Exec(userID, name, false)
	id, err := result.LastInsertId()

	todo := new(Todo)
	todo.ID = int(id)
	todo.UserID = userID
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
			id			INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
			user_id		STRING (100) NOT NULL , 
			name		TEXT,
			completed	BOOLEAN,
			createdAt	DATETIME
		);
		CREATE INDEX IF NOT EXISTS userIdIndexOnTodos ON todos (
			user_id ASC 
		);
	`)

	pstmt.Exec()

	if err != nil {
		panic(err)
	}

	return &sqliteHandler{db: db}
}
