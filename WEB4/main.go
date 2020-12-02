package main

import (
	"go-web/WEB4/decoHandler"
	"go-web/WEB4/myapp"
	"log"
	"net/http"
	"time"
)

func logger(w http.ResponseWriter, r *http.Request, h http.Handler) {
	start := time.Now()
	log.Println("[LOGGER1] started")

	// console.PrintColored("[LOGGER1]", console.Info)
	// console.PrintColoredLn(" started", console.Warning)

	h.ServeHTTP(w, r)

	log.Println("[LOGGER1] completed.", time.Since(start).Microseconds())
	// console.PrintColored("[LOGGER1]", console.Info)
	// sec := fmt.Sprint(time.Since(start).Microseconds())
	// console.PrintColored(" completed. ", console.Warning)
	// console.PrintColoredLn(sec, console.Success)
}

func logger2(w http.ResponseWriter, r *http.Request, h http.Handler) {
	start := time.Now()
	log.Println("[LOGGER2] started")

	h.ServeHTTP(w, r)

	log.Println("[LOGGER2] completed.", time.Since(start).Microseconds())
}

func newHandler() http.Handler {
	h := myapp.NewHandler()
	h = decoHandler.NewDecoHandler(h, logger)
	h = decoHandler.NewDecoHandler(h, logger2)
	return h
}

func main() {
	mux := newHandler()

	http.ListenAndServe(":3001", mux)

}
