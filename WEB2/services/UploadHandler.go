package services

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func UploadHandler(w http.ResponseWriter, r *http.Request) {
	uploadFile, header, err := r.FormFile("upload_file")
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprint(w, err)
		return
	}
	defer uploadFile.Close()

	dirname := os.Getenv("GOPATH") + `\src\go-web\WEB2\uploads`
	os.MkdirAll(dirname, 0777)

	filepath := fmt.Sprintf("%s/%s", dirname, header.Filename)
	savedFile, saveErr := os.Create(filepath)
	defer savedFile.Close()

	if saveErr != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprint(w, saveErr)
		return
	}

	io.Copy(savedFile, uploadFile)
	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, filepath)
}
