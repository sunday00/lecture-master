package pkg

import (
	"fmt"
	"sync"
	"time"
)

func (p Pkg) Channel() {
	var wg sync.WaitGroup

	var ch = make(chan int)

	wg.Add(1)
	go square(&wg, ch)

	ch <- 9

	wg.Wait()
}

func square(wg *sync.WaitGroup, ch chan int) {
	n := <-ch

	time.Sleep(time.Second)

	println(n)

	wg.Done()
}

func (p Pkg) ForeverChan() {
	ch := make(chan int)
	go printSomething()
	ch <- 9
	fmt.Println("this is never print")
}

func printSomething() {
	for {
		time.Sleep(1 * time.Second)
		println("sleep")
	}
}

func (p Pkg) SpacedChannel() {
	ch := make(chan int, 1)
	go printSomething()
	ch <- 9
	fmt.Println("this print immediately")
}

func (p Pkg) ObserveChan() {
	var wg sync.WaitGroup
	ch := make(chan int, 1)

	wg.Add(1)
	go observer(&wg, ch)

	for i := 0; i < 10; i++ {
		ch <- i
	}
	close(ch)

	wg.Wait()

	println("stop")
}

func observer(wg *sync.WaitGroup, ch chan int) {
	for n := range ch {
		println(n)
		time.Sleep(time.Second)
	}
	wg.Done()
}

func (p Pkg) MultiChannel() {
	var wg sync.WaitGroup
	ch := make(chan string, 1)

	wg.Add(1)
	go tickObserver(&wg, ch)

	for i := 0; i < 10; i++ {
		if i%2 == 0 {
			ch <- "eating"
		} else {
			ch <- "rest"
		}

	}

	wg.Wait()

	println("stop")
}

func tickObserver(wg *sync.WaitGroup, ch chan string) {
	tick := time.Tick(time.Second)

	terminate := time.After(10 * time.Second)

	for {
		select {
		case c := <-tick:
			fmt.Printf("Tick : %v, something update \n", c)
		case t := <-terminate:
			fmt.Printf("Terminate : %v, done channel \n", t)
			wg.Done()
			return
		case n := <-ch:
			println(n)
			time.Sleep(time.Second)
		}
	}
}

type Car struct {
	Body  string
	Tire  string
	Color string
}

func (p Pkg) ProducerAndConsumer() {
	var wg sync.WaitGroup
	var startTime = time.Now()

	tireCh := make(chan *Car)
	paintCh := make(chan *Car)

	println("start factory")

	wg.Add(3)
	go MakeBody(&wg, tireCh)
	go InstallTire(&wg, tireCh, paintCh)
	go PaintCar(&wg, paintCh, startTime)

	wg.Wait()

	println("close the factory")
}

func MakeBody(wg *sync.WaitGroup, tireCh chan *Car) {
	tick := time.Tick(time.Second)
	after := time.After(10 * time.Second)

	for {
		select {
		case <-tick:
			car := &Car{}
			car.Body = "sports car"
			tireCh <- car
		case <-after:
			close(tireCh)
			wg.Done()
			return
		}
	}
}

func InstallTire(wg *sync.WaitGroup, tireCh chan *Car, paintCh chan *Car) {
	for car := range tireCh {
		time.Sleep(time.Second)
		car.Tire = "Winter tire"
		paintCh <- car
	}

	wg.Done()
	close(paintCh)
}

func PaintCar(wg *sync.WaitGroup, paintCh chan *Car, startTime time.Time) {
	for car := range paintCh {
		time.Sleep(time.Second)
		car.Color = "Red"
		duration := time.Now().Sub(startTime)
		fmt.Printf("%.2f completed car: %s %s %s \n", duration.Seconds(), car.Body, car.Tire, car.Color)
	}

	wg.Done()
}
