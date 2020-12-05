package main

import (
	"net/http"

	app "go-web/todo-project/app"

	"github.com/urfave/negroni"
)

func main() {
	m := app.MakeHandler()
	n := negroni.Classic()
	n.UseHandler(m)

	http.ListenAndServe(":3001", n)
}
