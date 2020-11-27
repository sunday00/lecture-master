package routers

import (
	serviceMain "go-web/template/services/mainpage"
	serviceUser "go-web/template/services/users"
	"net/http"

	"github.com/gorilla/mux"
)

// Routes returns http.NewServerMux() with some routes
func Routes() http.Handler {
	// mux := http.NewServeMux()
	mux := mux.NewRouter()

	mux.Handle("/", &serviceMain.IndexController{})
	mux.Handle("/users", &serviceUser.UserController{})
	mux.Handle("/users/", &serviceUser.UserController{})
	mux.Handle("/users/{id:[0-9]+}", &serviceUser.UserController{})

	return mux
}
