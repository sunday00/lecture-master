package pkg

import (
	"strconv"
	"time"

	"github.com/sunday00/go-console"
)

// Basic0 ...
func Basic0() {
	console.PrintColoredRainbow("Hello select example")
	CarFactory()
}

// Car ...
type Car struct {
	val string
}

// Plane ...
type Plane struct {
	val string
}

func makeTire(carChan chan Car, planeChan chan Plane, nextCarChan chan Car, nextPlaneChan chan Plane) {
	for {
		select {
		case car := <-carChan:
			car.val += "Tire, "

			nextCarChan <- car
		case plane := <-planeChan:
			plane.val += "Tire, "
			nextPlaneChan <- plane
		}
	}
}

func makeEngine(carChan chan Car, nextChan chan Car) {
	for {
		car := <-carChan
		car.val += "Engine, "

		nextChan <- car
	}
}

func startCarWork(chan1 chan Car) {
	i := 0
	for {
		time.Sleep(1 * time.Second)
		chan1 <- Car{val: "car" + strconv.Itoa(i) + " : "}
		i++
	}
}

func startPlaneWork(chan1 chan Plane) {
	i := 0
	for {
		time.Sleep(1 * time.Second)
		chan1 <- Plane{val: "plane" + strconv.Itoa(i) + " : "}
		i++
	}
}

// CarFactory ...
func CarFactory() {
	carChannel1 := make(chan Car)
	carChannel2 := make(chan Car)
	carChannel3 := make(chan Car)

	planeChannel1 := make(chan Plane)
	planeChannel2 := make(chan Plane)

	go startCarWork(carChannel1)
	go startPlaneWork(planeChannel1)
	go makeTire(carChannel1, planeChannel1, carChannel2, planeChannel2)
	go makeEngine(carChannel2, carChannel3)

	timerChan := time.After(30 * time.Second)
	tickChan := time.Tick(5 * time.Second)

	for {
		select {
		case result := <-carChannel3:
			console.PrintColoredLn(result.val, console.White)
		case result := <-planeChannel2:
			console.PrintColoredLn(result.val, console.Black)
		case <-timerChan:
			console.PrintColoredLn("TIME OVER", console.Danger)
			return
		case <-tickChan:
			console.PrintColoredLn("TICK", console.Warning)
		}

	}
}
