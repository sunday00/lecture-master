package services

import (
	"fmt"
	"net/http"
)

type BarHandler struct{}

func (h *BarHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "This is bar")
}
