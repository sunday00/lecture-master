package main

import (
	"net/http"

	app "go-web/todo-project/app"
	"go-web/todo-project/models"

	"github.com/sunday00/go-console"
)

func main() {

	console.PrintColoredRainbow("The todo app has been started...")

	m := app.MakeHandler()

	defer models.CloseDB()

	console.PrintColoredLn("Server is now listen http://localhost:3001", console.Info)
	err := http.ListenAndServe(":3001", m)
	if err != nil {
		panic(err)
	}
}
