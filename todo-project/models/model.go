package models

import (
	"os"
	"time"

	"github.com/joho/godotenv"
)

// Todo ...
type Todo struct {
	ID        int       `json:"id"`
	UserID    string    `json:"user_id"`
	Name      string    `json:"name"`
	Completed bool      `json:"completed"`
	CreatedAt time.Time `json:"created_at"`
}

type dbHandler interface {
	getTodos(userID string) []*Todo
	getTodosMap(userID string) map[int]*Todo
	addTodo(name string, userID string) *Todo
	updateTodo(id int) bool
	removeTodo(id int) bool
	closeDB()
}

var handler dbHandler

func init() {
	godotenv.Load(os.Getenv("GOPATH") + "/src/GO-WEB/todo-project/.env")
	if os.Getenv("DB_DRIVER") == "memory" {
		handler = newMemoryHandler()
	} else if os.Getenv("DB_DRIVER") == "sqlite" {
		handler = newSqliteHandler()
	}

}

// GetTodos ...
func GetTodos(userID string) []*Todo {
	return handler.getTodos(userID)
}

//GetTodosMap ...
func GetTodosMap(userID string) map[int]*Todo {
	return handler.getTodosMap(userID)
}

// AddTodo ...
func AddTodo(name string, userID string) *Todo {
	return handler.addTodo(name, userID)
}

// RemoveTodo ...
func RemoveTodo(id int) bool {
	return handler.removeTodo(id)
}

// UpdateTodo ...
func UpdateTodo(id int) bool {
	return handler.updateTodo(id)
}

// CloseDB ...
func CloseDB() {
	handler.closeDB()
}
