package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type barHandler struct{}

func (h *barHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "This is bar")
}

type getHandler struct{}

func (h *getHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	if name == "" {
		name = "world"
	}
	fmt.Fprintf(w, "hello %s~!", name)
}

type User struct {
	Name      string    `json:"name"`
	Age       int       `json:"agr"`
	Hobby     []string  `json:"hobby"`
	CreatedAt time.Time `json:"createdAt"`
}

type jsonHandler struct{}

func (h *jsonHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	user := new(User)
	err := json.NewDecoder(r.Body).Decode(user)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprint(w, err)
		return
	}
	user.CreatedAt = time.Now()

	fmt.Println(user.Name)

	data, err := json.Marshal(user)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	w.Header().Add("content-type", "application/json")

	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, string(data))
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "hello go web")
	})

	mux.HandleFunc("/foo", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "This is foo")
	})

	mux.Handle("/bar", &barHandler{})

	mux.Handle("/get", &getHandler{})

	mux.Handle("/json", &jsonHandler{})

	http.ListenAndServe(":3001", mux)
}
