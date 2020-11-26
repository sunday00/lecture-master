package tests

import (
	"bytes"
	"io"
	"mime/multipart"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"

	myServices "go-web/WEB2/services"
)

func TestUploadRequest(t *testing.T) {
	assert := assert.New(t)
	path := os.Getenv("GOPATH") + `\src\go-web\WEB2\tests\test.png`

	uploadFile, _ := os.Open(path)
	defer uploadFile.Close()

	buf := &bytes.Buffer{}
	writer := multipart.NewWriter(buf)

	multi, err := writer.CreateFormFile("upload_file", filepath.Base(path))
	assert.NoError(err)

	io.Copy(multi, uploadFile)
	writer.Close()

	res := httptest.NewRecorder()
	req := httptest.NewRequest("POST", "/uploads", buf)
	req.Header.Set("Content-type", writer.FormDataContentType())

	myServices.UploadHandler(res, req)
	assert.Equal(http.StatusOK, res.Code)

	uploadFilePath := os.Getenv("GOPATH") + `\src\go-web\WEB2\uploads\` + filepath.Base(path)
	// console.PrintColoredLn(uploadFilePath, console.Cute)
	assert.FileExists(uploadFilePath)

	afterFile, _ := os.Open(uploadFilePath)
	beforeFile, _ := os.Open(path)
	defer afterFile.Close()
	defer beforeFile.Close()

	beforeData := []byte{}
	afterData := []byte{}
	beforeFile.Read(beforeData)
	afterFile.Read(afterData)

	assert.Equal(beforeData, afterData)
}
