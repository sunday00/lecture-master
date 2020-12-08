package main

import (
	"net/http"

	app "go-web/todo-project/app"
	"go-web/todo-project/models"

	"github.com/urfave/negroni"
)

func main() {
	m := app.MakeHandler()
	n := negroni.Classic()
	n.UseHandler(m)
	defer models.CloseDB()

	http.ListenAndServe(":3001", n)
}
