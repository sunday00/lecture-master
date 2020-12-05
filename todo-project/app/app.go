package app

import (
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/unrolled/render"
)

var rd *render.Render

type Todo struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Completed bool      `json:"completed"`
	CreatedAt time.Time `json:"created_at"`
}

var todoMap map[int]*Todo

func addTestTodos() {
	todoMap[1] = &Todo{1, "Buy some tea", false, time.Now().AddDate(0, 0, -3)}
	todoMap[2] = &Todo{2, "Buy some cocoa", true, time.Now().AddDate(0, 0, -2)}
	todoMap[3] = &Todo{3, "Run track on playground", false, time.Now().Add(time.Duration(-3) * time.Hour)}
	todoMap[4] = &Todo{4, "Spit on the Park's grave", false, time.Now().Add(time.Duration(-2) * time.Hour)}
	todoMap[5] = &Todo{5, "Learn golang", false, time.Now().Add(time.Duration(-30) * time.Minute)}
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/todo.html", http.StatusTemporaryRedirect)
}

func getTodoListHandler(w http.ResponseWriter, r *http.Request) {
	list := []*Todo{}
	for _, v := range todoMap {
		list = append(list, v)
	}
	rd.JSON(w, http.StatusOK, list)

}

func MakeHandler() http.Handler {

	todoMap = make(map[int]*Todo)
	addTestTodos()

	rd = render.New()
	r := mux.NewRouter()

	r.HandleFunc("/todos", getTodoListHandler).Methods("GET")
	r.HandleFunc("/", indexHandler)

	return r
}
