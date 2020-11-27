package mainpage

import (
	"fmt"
	"net/http"
)

// IndexController ..
type IndexController struct{}

func (c *IndexController) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello Main")
}
