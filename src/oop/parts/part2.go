package parts

import (
	"fmt"

	"github.com/sunday00/go-console"
)

type Person interface {
	eatSomething()
	getName() string
}

type Student struct {
	name string
	age  int
}

type Developer struct {
	name string
	age  int
}

func (s *Student) eatSomething() {
	console.PrintColoredLn("yum", console.White)
}

func (d *Developer) eatSomething() {
	console.PrintColoredLn("skip", console.Danger)
}

func (s *Student) getName() string {
	return s.name
}

func (d *Developer) getName() string {
	return d.name
}

func sayHello(p Person) {
	fmt.Println("HI, " + p.getName())
}

func Part2() {

	console.PrintColoredRainbow("OOP INTERFACE STUDY")

	student := &Student{"k", 2}
	developer := &Developer{"Lee", 3}

	student.eatSomething()
	developer.eatSomething()

	sayHello(student)
	sayHello(developer)

}
