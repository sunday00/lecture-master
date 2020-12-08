package tests

import (
	"encoding/json"
	models "go-web/todo-project/models"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strconv"
	"testing"

	"github.com/stretchr/testify/assert"

	app "GO-WEB/todo-project/app"
)

func TestTodos(t *testing.T) {
	assert := assert.New(t)

	ts := httptest.NewServer(app.MakeHandler())
	defer ts.Close()

	totallen := len(models.GetTodos())

	resp, err := http.PostForm(ts.URL+"/todos", url.Values{"name": {"test todo"}})
	assert.NoError(err)
	assert.Equal(http.StatusCreated, resp.StatusCode)
	assert.Equal(totallen+1, len(models.GetTodos()))

	var todo models.Todo
	err = json.NewDecoder(resp.Body).Decode(&todo)
	assert.NoError(err)
	assert.Equal(todo.Name, "test todo")

	id1 := todo.ID

	resp, err = http.PostForm(ts.URL+"/todos", url.Values{"name": {"test todo2"}})
	assert.NoError(err)
	assert.Equal(http.StatusCreated, resp.StatusCode)
	assert.Equal(totallen+2, len(models.GetTodos()))

	err = json.NewDecoder(resp.Body).Decode(&todo)
	assert.NoError(err)
	assert.Equal(todo.Name, "test todo2")
	assert.Equal(todo.ID, id1+1)

	resp, err = http.Get(ts.URL + "/todos")
	assert.NoError(err)
	assert.Equal(http.StatusOK, resp.StatusCode)

	todos := []*models.Todo{}
	err = json.NewDecoder(resp.Body).Decode(&todos)
	assert.NoError(err)
	assert.Equal(len(todos), totallen+2)

	for _, t := range todos {
		if t.ID == id1 {
			assert.Equal(t.Name, "test todo")
		}
		if t.ID == id1+1 {
			assert.Equal(t.Name, "test todo2")
		}
	}

}

func TestChecked(t *testing.T) {
	assert := assert.New(t)

	ts := httptest.NewServer(app.MakeHandler())
	defer ts.Close()

	var todo models.Todo
	resp, err := http.PostForm(ts.URL+"/todos", url.Values{"name": {"test todo!!!"}})
	err = json.NewDecoder(resp.Body).Decode(&todo)
	assert.NoError(err)
	assert.False(todo.Completed)
	id1 := todo.ID

	req, _ := http.NewRequest("PATCH", ts.URL+"/todos/item"+strconv.Itoa(id1), nil)
	http.DefaultClient.Do(req)
	todos := models.GetTodosMap()
	assert.True(todos[id1].Completed)
}

func TestRemoved(t *testing.T) {
	assert := assert.New(t)

	ts := httptest.NewServer(app.MakeHandler())
	defer ts.Close()

	var todo models.Todo
	resp, err := http.PostForm(ts.URL+"/todos", url.Values{"name": {"test todo!!!"}})
	err = json.NewDecoder(resp.Body).Decode(&todo)
	assert.NoError(err)

	id1 := todo.ID
	totallen := len(models.GetTodos())

	req, _ := http.NewRequest("DELETE", ts.URL+"/todos/item"+strconv.Itoa(id1), nil)
	http.DefaultClient.Do(req)
	assert.Equal(len(models.GetTodos()), totallen-1)
}
