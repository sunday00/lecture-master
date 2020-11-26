package main

import (
	services "go-web/WEB2/services"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("WEB2/public")))

	http.HandleFunc("/uploads", services.UploadHandler)

	http.ListenAndServe(":3001", nil)
}
