package main

import (
	"fmt"
	"net/http"
)

func UploadHandler(w http.ResponseWriter, r *http.Request) {
	file, header, err := r.FormFile("upload_file")
	fmt.Println(file, header, err)
}

func main() {
	http.Handle("/", http.FileServer(http.Dir("WEB2/public")))

	http.HandleFunc("/uploads", UploadHandler)

	http.ListenAndServe(":3001", nil)
}
