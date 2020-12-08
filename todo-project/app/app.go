package app

import (
	model "go-web/todo-project/models"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/unrolled/render"
)

var rd *render.Render

type ResponseStatus struct {
	Success bool `json:"success"`
	Item    int  `json:"item"`
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/todo.html", http.StatusTemporaryRedirect)
}

func getTodoListHandler(w http.ResponseWriter, r *http.Request) {
	list := model.GetTodos()
	rd.JSON(w, http.StatusOK, list)

}

func addTodoListHandler(w http.ResponseWriter, r *http.Request) {
	name := r.FormValue("name")

	todo := model.AddTodo(name)
	rd.JSON(w, http.StatusCreated, todo)
}

func removeTodoListHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := strconv.Atoi(vars["id"])

	ok := model.RemoveTodo(id)
	if ok {
		rd.JSON(w, http.StatusOK, ResponseStatus{true, id})
	} else {
		rd.JSON(w, http.StatusBadRequest, ResponseStatus{false, id})
	}
}

func toggleTodoListHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, _ := strconv.Atoi(vars["id"])
	ok := model.UpdateTodo(id)
	if ok {
		rd.JSON(w, http.StatusOK, ResponseStatus{true, id})
	} else {
		rd.JSON(w, http.StatusBadRequest, ResponseStatus{false, id})
	}
}

func MakeHandler() http.Handler {

	rd = render.New()
	r := mux.NewRouter()

	r.HandleFunc("/todos", getTodoListHandler).Methods("GET")
	r.HandleFunc("/todos", addTodoListHandler).Methods("POST")
	r.HandleFunc("/todos/item{id:[0-9]+}", removeTodoListHandler).Methods("DELETE")
	r.HandleFunc("/todos/item{id:[0-9]+}", toggleTodoListHandler).Methods("PATCH")
	r.HandleFunc("/", indexHandler)

	return r
}
