package main

import (
	"net/http"

	myapp "go-web/WEB1/myapp"
)

func main() {
	http.ListenAndServe(":3001", myapp.Router())
}
