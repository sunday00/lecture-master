package app

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/joho/godotenv"
	"github.com/sunday00/go-console"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

var googleOauthConfig = oauth2.Config{
	RedirectURL:  "http://localhost:3001/auth/google/callback",
	ClientID:     "",
	ClientSecret: "",
	Scopes:       []string{"https://www.googleapis.com/auth/userinfo.email"},
	Endpoint:     google.Endpoint,
}

type GoogleUser struct {
	ID            string `json:"id"`
	Email         string `json:"email"`
	VerifiedEmail bool   `json:"verified_email"`
	Picture       string `json:"picture"`
}

func init() {
	godotenv.Load()
	googleOauthConfig.ClientID = os.Getenv("GOOGLE_CLIENT_ID")
	googleOauthConfig.ClientSecret = os.Getenv("GOOGLE_SECRET_KEY")
}

func generateStateOauthCookie(w http.ResponseWriter) string {
	expiration := time.Now().Add(24 * time.Hour)
	b := make([]byte, 16)
	rand.Read(b)
	state := base64.URLEncoding.EncodeToString(b)
	cookie := &http.Cookie{Name: "oauthstate", Value: state, Expires: expiration}
	http.SetCookie(w, cookie)
	return state
}

func getGoogleUserInfo(code string) ([]byte, error) {
	token, err := googleOauthConfig.Exchange(context.Background(), code)

	if err != nil {
		return nil, fmt.Errorf("failed to Exchange %s\n", err.Error())
	}

	resp, err := http.Get(os.Getenv("GOOGLE_USER_INFO_URL") + token.AccessToken)
	if err != nil {
		return nil, fmt.Errorf("failed to get user info %s\n", err.Error())
	}

	return ioutil.ReadAll(resp.Body)
}

func googleLoginHandler(w http.ResponseWriter, r *http.Request) {
	state := generateStateOauthCookie(w)

	url := googleOauthConfig.AuthCodeURL(state)

	http.Redirect(w, r, url, http.StatusTemporaryRedirect)
}

func googleCallbackHandler(w http.ResponseWriter, r *http.Request) {

	oauthState, _ := r.Cookie("oauthstate")

	if r.FormValue("state") != oauthState.Value {
		errMsg := fmt.Sprintf("invalid google oauth state cookie:%s state:%s\n", oauthState.Value, r.FormValue("state"))
		log.Print(errMsg)
		console.PrintColoredF("expected: %s \n", console.Info, r.FormValue("state"))
		console.PrintColoredF("resulted: %s \n", console.Success, oauthState.Value)

		// http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		http.Error(w, errMsg, http.StatusInternalServerError)
	}

	data, err := getGoogleUserInfo(r.FormValue("code"))
	if err != nil {
		log.Panicln(err.Error())
		// http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var user GoogleUser
	err = json.Unmarshal(data, &user)
	if err != nil {
		log.Panicln(err.Error())
		// http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	session, _ := store.Get(r, "session-user")
	// Set some session values.
	session.Values["user_id"] = user.ID
	session.Values["user_email"] = user.Email
	// Save it before we write to the response/return from the handler.
	err = session.Save(r, w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// fmt.Fprint(w, string(data))
	http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
}
