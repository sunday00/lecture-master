package services

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type User struct {
	Name      string    `json:"name"`
	Age       int       `json:"age"`
	Hobby     []string  `json:"hobby"`
	CreatedAt time.Time `json:"createdAt"`
}

type JsonHandler struct{}

func (h *JsonHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	user := new(User)
	err := json.NewDecoder(r.Body).Decode(user)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprint(w, err)
		return
	}
	user.CreatedAt = time.Now()

	data, err := json.Marshal(user)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	w.Header().Add("content-type", "application/json")

	w.WriteHeader(http.StatusOK)
	fmt.Fprint(w, string(data))
}
