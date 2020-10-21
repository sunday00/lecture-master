package helpers

import (
	"math/rand"
	"time"
)

//Rand returns some random number
func Rand(args ...int) int {

	time.Sleep(time.Nanosecond * 2)

	var from int
	var to int

	if len(args) == 0 {
		from = 0
		to = 10
	} else if len(args) == 1 {
		from = 0
		to = args[0]
	} else if len(args) == 2 {
		from = args[0]
		to = args[1]
	}

	rand.Seed(time.Now().UnixNano())
	return rand.Intn(to-from+1) + from
}
