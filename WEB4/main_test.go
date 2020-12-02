package main

import (
	"bufio"
	"bytes"
	"go-web/WEB4/myapp"
	"io/ioutil"
	"log"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIndexPage(t *testing.T) {
	assert := assert.New(t)

	ts := httptest.NewServer(myapp.NewHandler())
	defer ts.Close()

	resp, err := http.Get(ts.URL)

	assert.NoError(err)
	assert.Equal(http.StatusOK, resp.StatusCode)

	data, _ := ioutil.ReadAll(resp.Body)
	assert.Equal("hello index\n", string(data))

}

func TestDecoHandler(t *testing.T) {
	assert := assert.New(t)

	ts := httptest.NewServer(newHandler())
	defer ts.Close()

	buf := &bytes.Buffer{}
	log.SetOutput(buf)

	resp, err := http.Get(ts.URL)
	assert.NoError(err)
	assert.Equal(http.StatusOK, resp.StatusCode)

	r := bufio.NewReader(buf)
	l, _, err := r.ReadLine()
	assert.NoError(err)
	assert.Contains(string(l), "[LOGGER2] started")
	l, _, err = r.ReadLine()
	assert.NoError(err)
	assert.Contains(string(l), "[LOGGER1] started")
	l, _, err = r.ReadLine()
	assert.NoError(err)
	assert.Contains(string(l), "[LOGGER1] completed")
	l, _, err = r.ReadLine()
	assert.NoError(err)
	assert.Contains(string(l), "[LOGGER2] completed")
}
