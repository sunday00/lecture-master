package main

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/pat"
	"github.com/joho/godotenv"
	"github.com/sunday00/go-console"
	"github.com/urfave/negroni"
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
		log.Printf("invalid google oauth state cookie:%s state:%s\n", oauthState.Value, r.FormValue("state"))
		console.PrintColoredF("expected: %s \n", console.Info, r.FormValue("state"))
		console.PrintColoredF("resulted: %s \n", console.Success, oauthState.Value)

		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		// TO NOT THROW WHAT ERROR IT IS...
		// IF I NEED TO KNOW WHAT HAPPEN, JUST SECRETARY LOGGING.
		////// this information for state != cookie may means CSRF,
		////// so, if the process tells what error happens now,
		////// the Hacker can note this. So, Do not show what err it is,
		////// just tell fail and redirect to cli,
		////// record details secretly...

	}

	data, err := getGoogleUserInfo(r.FormValue("code"))
	if err != nil {
		log.Panicln(err.Error())
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	fmt.Fprint(w, string(data))
}

func main() {
	godotenv.Load()
	mux := pat.New()
	googleOauthConfig.ClientID = os.Getenv("GOOGLE_CLIENT_ID")
	googleOauthConfig.ClientSecret = os.Getenv("GOOGLE_SECRET_KEY")

	mux.HandleFunc("/auth/google/login", googleLoginHandler)
	mux.HandleFunc("/auth/google/callback", googleCallbackHandler)

	n := negroni.Classic()
	n.UseHandler(mux)
	http.ListenAndServe(":3001", n)
}
