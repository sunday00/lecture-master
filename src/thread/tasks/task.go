package tasks

import (
	"fmt"
	"strconv"
	"sync"
	"time"

	"github.com/sunday00/go-console"
)

type total struct {
	amount int
	mutex  *sync.Mutex
}

func Task() {
	go inner()
	go inner2()
	for i := 0; i < 20; i++ {
		time.Sleep(200 * time.Millisecond)
		console.PrintColored("main", console.Cute)
		console.PrintColoredF(": %d\n", console.Info, i)
	}

	console.PrintColoredRainbow("DONE")

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	total1 := &total{10000, &sync.Mutex{}}
	total2 := &total{10000, &sync.Mutex{}}
	total3 := &total{10000, &sync.Mutex{}}

	go moveEach(total1, total2)
	go moveEach(total2, total3)
	go moveEach(total3, total1)

	for i := 0; i < 20; i++ {
		console.PrintColoredRainbow(strconv.Itoa(total1.amount + total2.amount + total3.amount))
		time.Sleep(100 * time.Millisecond)
	}

	console.PrintColoredLn(strconv.Itoa(total1.amount), console.Info)

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

func (t *total) minus1() {
	t.mutex.Lock()
	if t.amount-100 <= 0 {
		return
	}
	t.amount -= 100
	t.mutex.Unlock()

	// console.PrintColoredRainbow(strconv.Itoa(t.amount))
}

func (t *total) plus1() {
	t.mutex.Lock()
	t.amount += 100
	t.mutex.Unlock()

	// console.PrintColoredLn(strconv.Itoa(t.amount), console.Warning)
}

func moveEach(one *total, two *total) {
	for {
		one.minus1()
		two.plus1()
	}
}
