package myapp

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"

	services "go-web/WEB1/myapp/services"
)

func TestIndexRequest(t *testing.T) {

	assert := assert.New(t)

	res := httptest.NewRecorder()
	req := httptest.NewRequest("GET", "/", nil)

	services.IndexHandler(res, req)

	assert.Equal(http.StatusOK, res.Code)

	// if res.Code != http.StatusOK {
	// 	// if res.Code != http.StatusBadRequest {
	// 	t.Fatal("failed : ", res.Code)
	// }

	data, _ := ioutil.ReadAll(res.Body)
	assert.Equal("hello go web", string(data))
}

func TestBarRequest(t *testing.T) {

	assert := assert.New(t)

	res := httptest.NewRecorder()
	req := httptest.NewRequest("GET", "/bar", nil)

	mux := &services.BarHandler{}
	mux.ServeHTTP(res, req)

	assert.Equal(http.StatusOK, res.Code)

	data, _ := ioutil.ReadAll(res.Body)
	assert.Equal("This is bar", string(data))
}

func TestGetRequest(t *testing.T) {

	assert := assert.New(t)

	res := httptest.NewRecorder()
	req := httptest.NewRequest("GET", "/get?name=sunday00", nil)

	router := Router()
	router.ServeHTTP(res, req)

	assert.Equal(http.StatusOK, res.Code)

	data, _ := ioutil.ReadAll(res.Body)
	assert.Equal("hello sunday00~!", string(data))
}

func TestJSONRequest(t *testing.T) {

	assert := assert.New(t)
	router := Router()

	res := httptest.NewRecorder()
	req := httptest.NewRequest("GET", "/json", nil)

	router.ServeHTTP(res, req)

	assert.Equal(http.StatusBadRequest, res.Code)
	data, _ := ioutil.ReadAll(res.Body)
	assert.Equal("EOF", string(data))

	res = httptest.NewRecorder()
	req = httptest.NewRequest("POST", "/json", strings.NewReader(`{"name":"sunday00", "age":35, "hobby":["sing"]}`))
	router.ServeHTTP(res, req)

	assert.Equal(http.StatusOK, res.Code)

	user := new(services.User)
	err := json.NewDecoder(res.Body).Decode(user)
	assert.Nil(err)
	assert.Equal("sunday00", user.Name)
	assert.Equal(35, user.Age)
	assert.Equal("sing", user.Hobby[0])
}
