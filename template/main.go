package main

import (
	"go-web/template/routers"
	"net/http"
)

func main() {

	http.ListenAndServe(":3001", routers.Routes())
}
