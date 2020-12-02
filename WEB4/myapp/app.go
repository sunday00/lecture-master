package myapp

import (
	"fmt"
	"net/http"
)

func handleIndex(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "hello index")
}

func NewHandler() http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("/", handleIndex)

	return mux
}
