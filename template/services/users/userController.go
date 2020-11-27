package users

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
)

// UserController ..
type UserController struct{}

func (c *UserController) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	if r.Method == "POST" {
		postCreate(w, r)
		return
	}

	uri := mux.Vars(r)

	if uri["id"] == "" || uri["id"] == "/" {
		getIndex(w, r)
		return
	} else {
		i, _ := strconv.Atoi(uri["id"])
		getUserInfo(w, r, i)
		return
	}

}

func getIndex(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello Users")
}

func getUserInfo(w http.ResponseWriter, r *http.Request, id int) {
	// fake database
	user := new(User)
	user.ID = id
	user.Name = "sunday00"
	user.Age = 35
	user.Email = "sunday_0@hotmail.com"
	user.CreatedAt = time.Now().AddDate(0, 0, -3)

	userMap := make(map[int]*User)

	userMap[id] = user
	// fake database

	user, ok := userMap[id]

	if !ok {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprint(w, "No user:", id)
		return
	}

	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	data, _ := json.Marshal(user)

	fmt.Fprint(w, string(data))
}

func postCreate(w http.ResponseWriter, r *http.Request) {
	user := new(User)
	user.ParseJSON(r.Body)
	w.WriteHeader(http.StatusCreated)
	res, _ := json.Marshal(user)
	fmt.Fprint(w, string(res))
}
