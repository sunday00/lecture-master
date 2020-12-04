package main

import (
	"net/http"

	"github.com/gorilla/pat"
	"github.com/sunday00/go-console"
	"github.com/urfave/negroni"
)

func postMessageHandler(w http.ResponseWriter, r *http.Request) {
	msg := r.FormValue("msg")
	name := r.FormValue("name")

	console.PrintColoredLn(msg, console.Info)
	console.PrintColoredLn(name, console.Success)
}

func main() {

	mux := pat.New()

	mux.Post("/messages", postMessageHandler)

	n := negroni.Classic()
	n.UseHandler(mux)

	http.ListenAndServe(":3001", n)

}
