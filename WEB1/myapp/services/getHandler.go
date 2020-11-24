package services

import (
	"fmt"
	"net/http"
)

type GetHandler struct{}

func (h *GetHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	if name == "" {
		name = "world"
	}
	fmt.Fprintf(w, "hello %s~!", name)
}
