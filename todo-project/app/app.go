package app

import (
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	"github.com/unrolled/render"
	"github.com/urfave/negroni"
)

var store = sessions.NewCookieStore([]byte(os.Getenv("SESSION_KEY")))
var rd *render.Render

func MakeHandler() http.Handler {

	rd = render.New()
	r := mux.NewRouter()

	// n := negroni.Classic()
	n := negroni.New(
		negroni.NewRecovery(),
		negroni.NewLogger(),
		negroni.HandlerFunc(Middlewares),
		negroni.NewStatic(http.Dir("public")),
	)
	n.UseHandler(r)

	r.HandleFunc("/todos", getTodoListHandler).Methods("GET")
	r.HandleFunc("/todos", addTodoListHandler).Methods("POST")
	r.HandleFunc("/todos/item{id:[0-9]+}", removeTodoListHandler).Methods("DELETE")
	r.HandleFunc("/todos/item{id:[0-9]+}", toggleTodoListHandler).Methods("PATCH")
	r.HandleFunc("/", indexHandler)

	r.HandleFunc("/auth/google/login", googleLoginHandler)
	r.HandleFunc("/auth/google/callback", googleCallbackHandler)

	return n
}
