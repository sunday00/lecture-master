package main

import (
	"fmt"
	"net/http"
)

type barHandler struct{}

func (h *barHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "This is bar")
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "hello go web")
	})

	http.HandleFunc("/foo", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "This is foo")
	})

	http.Handle("/bar", &barHandler{})

	http.ListenAndServe(":3001", nil)
}
