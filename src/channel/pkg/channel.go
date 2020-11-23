package pkg

import (
	"fmt"
	"strconv"
	"time"

	"github.com/sunday00/go-console"
)

// Channel ...
func Channel() {

}

func pop(c chan int) {
	fmt.Println("pop start")
	v := <-c
	console.KeyValue("v", strconv.Itoa(v))
	fmt.Println("pop end")
}

// BasicExample ...
func BasicExample() {

	console.PrintColoredRainbow("NOW START CHANNEL EXAMPLE")

	c := make(chan int)

	go pop(c)
	console.PrintColoredLn("interrupt socket", console.Info)
	c <- 10

	console.PrintColoredLn("DONE", console.Success)

}

// Car ...
type Car struct {
	val string
}

func makeTire(carChan chan Car, nextChan chan Car) {
	car := <-carChan
	car.val += "Tire, "

	nextChan <- car
}

func makeEngine(carChan chan Car, nextChan chan Car) {
	car := <-carChan
	car.val += "Engine, "

	nextChan <- car
}

// CarFactory ...
func CarFactory() {
	channel1 := make(chan Car)
	channel2 := make(chan Car)
	channel3 := make(chan Car)

	go makeTire(channel1, channel2)
	go makeEngine(channel2, channel3)

	channel1 <- Car{val: "car1: "}
	result := <-channel3

	console.PrintColoredLn(result.val, console.White)
}

func makeTire2(carChan chan Car, nextChan chan Car) {
	for {
		car := <-carChan
		car.val += "Tire, "

		nextChan <- car
	}

}

func makeEngine2(carChan chan Car, nextChan chan Car) {
	for {
		car := <-carChan
		car.val += "Engine, "

		nextChan <- car
		fmt.Println("make tire, engine")
	}
}

func paintCar(carChan chan Car, nextChan chan Car) {
	for {
		time.Sleep(2 * time.Second)
		car := <-carChan
		car.val += "Paint, "

		nextChan <- car
	}
}

func startWork(chan1 chan Car) {
	i := 0
	for {
		time.Sleep(1 * time.Second)
		chan1 <- Car{val: "car" + strconv.Itoa(i) + " : "}
		i++
	}
}

// CarFactory2 ...
func CarFactory2() {
	channel1 := make(chan Car)
	channel2 := make(chan Car)
	channel3 := make(chan Car)
	channel4 := make(chan Car)

	go startWork(channel1)
	go makeTire2(channel1, channel2)
	go makeEngine2(channel2, channel3)
	go paintCar(channel3, channel4)

	for {
		// channel1 <- Car{val: "car1: "}
		result := <-channel4
		console.PrintColoredLn(result.val, console.White)
	}

}
