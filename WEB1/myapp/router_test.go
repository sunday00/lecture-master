package myapp

import (
	"net/http"
	"net/http/httptest"
	"testing"

	services "go-web/WEB1/myapp/services"
)

func BasicRequestTest(t *testing.T) {
	res := httptest.NewRecorder()
	req := httptest.NewRequest("GET", "/", nil)

	services.IndexHandler(res, req)

	// if res.Code != http.StatusOK {
	if res.Code != http.StatusBadRequest {
		t.Fatal("failed : ", res.Code)
	}
}

func TestIndexPathHandler(t *testing.T) {
	BasicRequestTest(t)
}
