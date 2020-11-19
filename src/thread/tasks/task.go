package tasks

import (
	"fmt"
	"time"

	"github.com/sunday00/go-console"
)

func Task() {
	go inner()
	go inner2()
	for i := 0; i < 20; i++ {
		time.Sleep(200 * time.Millisecond)
		console.PrintColored("main", console.Cute)
		console.PrintColoredF(": %d\n", console.Info, i)
	}

	console.PrintColoredRainbow("DONE")
}

func inner() {
	for i := 0; i < 20; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println("inner:", i)
	}
}

func inner2() {
	for i := 0; i < 20; i++ {
		time.Sleep(175 * time.Millisecond)
		console.PrintColoredF("inner2 : %d\n", console.Black, i)
	}
}
