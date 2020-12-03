package main

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/gorilla/pat"
	"github.com/unrolled/render"
	"github.com/urfave/negroni"
)

var rd *render.Render

type User struct {
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"created_at"`
}

func getUserInfoHandler(w http.ResponseWriter, r *http.Request) {
	user := User{Name: "sunday00", Email: "sunday_0@hotmail.com"}

	// w.Header().Add("Content-type", "application/json")
	// w.WriteHeader(http.StatusOK)
	// data, _ := json.Marshal(user)
	// fmt.Fprint(w, string(data))
	rd.JSON(w, http.StatusOK, user)
}

func postUserHandler(w http.ResponseWriter, r *http.Request) {
	user := new(User)
	// err := json.NewDecoder(r.Body).Decode(user)

	// if err != nil {
	// 	w.WriteHeader(http.StatusBadRequest)
	// 	fmt.Fprint(w, err)
	// 	return
	// }

	// user.CreatedAt = time.Now()

	// w.Header().Add("Content-type", "application/json")
	// w.WriteHeader(http.StatusOK)
	// data, _ := json.Marshal(user)
	// fmt.Fprint(w, string(data))

	err := json.NewDecoder(r.Body).Decode(user)
	if err != nil {
		rd.Text(w, http.StatusBadRequest, err.Error())
		return
	}

	rd.JSON(w, http.StatusOK, user)
}

func getHelloHandler(w http.ResponseWriter, r *http.Request) {
	user := User{Name: "sunday00", Email: "sunday_0@hotmail.com"}

	// w.Header().Add("Content-type", "application/json")
	// w.WriteHeader(http.StatusOK)
	// data, _ := json.Marshal(user)
	// fmt.Fprint(w, string(data))

	// tmpl, _ := template.New("hello").ParseFiles("templates/hello.tmpl")
	// tmpl.ExecuteTemplate(w, "hello.tmpl", user)

	// rd.HTML(w, http.StatusOK, "hello", user)
	rd.HTML(w, http.StatusOK, "body", user)
}

func main() {
	// rd = render.New()
	rd = render.New(render.Options{
		Directory:  "templates",
		Extensions: []string{".html", ".tmpl"},
		Layout:     "hello",
	})

	// mux := http.NewServeMux()
	mux := pat.New()

	// mux.HandleFunc("/users", getUserInfoHandler)
	mux.Get("/users", getUserInfoHandler)

	mux.Post("/users", postUserHandler)

	mux.Get("/hello", getHelloHandler)

	n := negroni.Classic()
	n.UseHandler(mux)

	http.ListenAndServe(":3001", n)
}
