package app

import (
	"net/http"
	"strings"
)

func Middlewares(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	CheckSignIn(w, r)

	//========

	next(w, r)
}

func getUserId(r *http.Request) string {
	session, err := store.Get(r, "session-user")
	userID := session.Values["user_id"]
	if err != nil || userID == nil {
		return ""
	}

	return userID.(string)
}

func CheckSignIn(w http.ResponseWriter, r *http.Request) {
	if getUserId(r) != "" {
		if strings.Contains(r.URL.Path, "/sign") {
			http.Redirect(w, r, "/todo.html", http.StatusTemporaryRedirect)
			return
		}
		return
	}

	if strings.Contains(r.URL.Path, "/sign") || strings.Contains(r.URL.Path, "/auth") {
		return
	}

	http.Redirect(w, r, "/sign.html", http.StatusTemporaryRedirect)
	return
}
