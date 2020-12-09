package app

import (
	"go-web/todo-project/models"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type ResponseStatus struct {
	Success bool `json:"success"`
	Item    int  `json:"item"`
}

func indexHandler(w http.ResponseWriter, r *http.Request) {

	http.Redirect(w, r, "/todo.html", http.StatusTemporaryRedirect)
}

func getTodoListHandler(w http.ResponseWriter, r *http.Request) {
	list := models.GetTodos()
	rd.JSON(w, http.StatusOK, list)
}

func addTodoListHandler(w http.ResponseWriter, r *http.Request) {
	name := r.FormValue("name")

	todo := models.AddTodo(name)
	rd.JSON(w, http.StatusCreated, todo)
}

func removeTodoListHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := strconv.Atoi(vars["id"])

	ok := models.RemoveTodo(id)
	if ok {
		rd.JSON(w, http.StatusOK, ResponseStatus{true, id})
	} else {
		rd.JSON(w, http.StatusBadRequest, ResponseStatus{false, id})
	}
}

func toggleTodoListHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := strconv.Atoi(vars["id"])
	ok := models.UpdateTodo(id)
	if ok {
		rd.JSON(w, http.StatusOK, ResponseStatus{true, id})
	} else {
		rd.JSON(w, http.StatusBadRequest, ResponseStatus{false, id})
	}
}
