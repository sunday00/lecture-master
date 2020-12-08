package models

import (
	"os"
	"time"

	"github.com/joho/godotenv"
)

type Todo struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Completed bool      `json:"completed"`
	CreatedAt time.Time `json:"created_at"`
}

type dbHandler interface {
	getTodos() []*Todo
	addTodo(name string) *Todo
	getTodosMap() map[int]*Todo
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

func GetTodos() []*Todo {
	return handler.getTodos()
}

func GetTodosMap() map[int]*Todo {
	return handler.getTodosMap()
}

func AddTodo(name string) *Todo {
	return handler.addTodo(name)
}

func RemoveTodo(id int) bool {
	return handler.removeTodo(id)
}

func UpdateTodo(id int) bool {
	return handler.updateTodo(id)
}

func CloseDB() {
	handler.closeDB()
}
