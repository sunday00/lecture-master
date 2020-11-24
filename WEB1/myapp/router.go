package myapp

import (
	"fmt"
	"net/http"

	services "go-web/WEB1/myapp/services"
)

// Router is router
func Router() http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("/", services.IndexHandler)

	mux.HandleFunc("/foo", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "This is foo")
	})

	mux.Handle("/bar", &services.BarHandler{})

	mux.Handle("/get", &services.GetHandler{})

	mux.Handle("/json", &services.JsonHandler{})

	return mux
}
