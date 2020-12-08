package models

import (
	"database/sql"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

type sqliteHandler struct {
	db      *sql.DB
	todomap map[int]*Todo
}

func (m *sqliteHandler) getTodos() []*Todo {
	// list := []*Todo{}
	// for _, v := range m.todomap {
	// 	list = append(list, v)
	// }
	// return list
	return nil
}

func (m *sqliteHandler) getTodosMap() map[int]*Todo {
	return m.todomap
}

func (m *sqliteHandler) addTodo(name string) *Todo {
	id := 0
	for _, v := range m.todomap {
		if id < v.ID {
			id = v.ID
		}
	}
	id = id + 1
	todo := &Todo{id, name, false, time.Now()}
	m.todomap[id] = todo
	return todo
}

func (m *sqliteHandler) removeTodo(id int) bool {
	if _, ok := m.todomap[id]; ok {
		delete(m.todomap, id)
		return true
	} else {
		return false
	}
}

func (m *sqliteHandler) updateTodo(id int) bool {
	if _, ok := m.todomap[id]; ok {
		m.todomap[id].Completed = !m.todomap[id].Completed
		return true
	} else {
		return false
	}
}
func (m *sqliteHandler) closeDB() {
	m.db.Close()
}

func newSqliteHandler() dbHandler {
	db, err := sql.Open("sqlite3", "./todo.db")
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
