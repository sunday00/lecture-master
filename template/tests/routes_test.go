package tests

import (
	"encoding/json"
	"go-web/template/routers"
	"go-web/template/services/users"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"strconv"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIndex(t *testing.T) {
	assert := assert.New(t)

	ts := httptest.NewServer(routers.Routes())
	defer ts.Close()

	resp, err := http.Get(ts.URL)

	assert.NoError(err)
	assert.Equal(http.StatusOK, resp.StatusCode)

	data, _ := ioutil.ReadAll(resp.Body)
	assert.NotNil(data)
	assert.Equal("Hello Main", string(data))

}

func TestUsers(t *testing.T) {
	assert := assert.New(t)

	ts := httptest.NewServer(routers.Routes())
	defer ts.Close()

	resp, err := http.Get(ts.URL + "/users")

	assert.NoError(err)
	assert.Equal(http.StatusOK, resp.StatusCode)

	data, _ := ioutil.ReadAll(resp.Body)
	assert.NotNil(data)
	assert.NotEqual("Hello Main", string(data))
	assert.Equal("Hello Users", string(data))

	resp, err = http.Get(ts.URL + "/users/1")

	assert.NoError(err)
	assert.Equal(http.StatusOK, resp.StatusCode)

	data, _ = ioutil.ReadAll(resp.Body)
	assert.NotNil(data)
	assert.NotEqual("Hello Users", string(data))
	assert.Contains(string(data), "1")
}

func TestCreateUser(t *testing.T) {
	assert := assert.New(t)

	ts := httptest.NewServer(routers.Routes())
	defer ts.Close()

	jsonData := strings.NewReader(`{"name":"sunday00", "age": 35, "email": "sunday_0@hotmail.com"}`)
	resp, err := http.Post(ts.URL+"/users", "application/json", jsonData)

	assert.NoError(err)
	assert.Equal(http.StatusCreated, resp.StatusCode)

	user := new(users.User)
	err = json.NewDecoder(resp.Body).Decode(user)
	assert.Nil(err)
	assert.Equal("sunday00", user.Name)
	assert.Equal(35, user.Age)

	id := user.ID
	resp, err = http.Get(ts.URL + "/users/" + strconv.Itoa(id))

	assert.NoError(err)
	assert.Equal(http.StatusOK, resp.StatusCode)

	data, _ := ioutil.ReadAll(resp.Body)
	assert.NotNil(data)
	assert.Contains(string(data), strconv.Itoa(id))

}
