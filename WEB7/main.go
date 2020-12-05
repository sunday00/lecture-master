package main

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/antage/eventsource"
	"github.com/gorilla/pat"
	"github.com/urfave/negroni"
)

func postMessageHandler(w http.ResponseWriter, r *http.Request) {
	msg := r.FormValue("msg")
	name := r.FormValue("name")

	sendMessgage(name, msg)
}

func addUserHandler(w http.ResponseWriter, r *http.Request) {
	username := r.FormValue("name")
	sendMessgage(username, " is Entered this room...")
}

func deleteUserHandler(w http.ResponseWriter, r *http.Request) {
	username := r.FormValue("name")
	sendMessgage(username, " is left this room...")
}

//Message ...
type Message struct {
	Name string `json:"name"`
	Msg  string `json:"msg"`
}

var msgCh chan Message

func sendMessgage(name, msg string) {
	msgCh <- Message{name, msg}
}

func processMsgCh(es eventsource.EventSource) {
	for msg := range msgCh {
		data, _ := json.Marshal(msg)
		es.SendEventMessage(string(data), "", strconv.Itoa(time.Now().Nanosecond()))
	}
}

func main() {
	msgCh = make(chan Message)

	es := eventsource.New(nil, nil)
	defer es.Close()

	go processMsgCh(es)

	mux := pat.New()

	mux.Post("/messages", postMessageHandler)

	mux.Handle("/stream", es)

	mux.Post("/users", addUserHandler)

	mux.Delete("/users", deleteUserHandler)

	n := negroni.Classic()
	n.UseHandler(mux)

	http.ListenAndServe(":3001", n)

}
