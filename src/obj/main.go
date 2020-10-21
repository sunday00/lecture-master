package main

import (
	"fmt"
	"strconv"
)

type Person struct {
	name      string
	age       int
	education Education
}

func (p Person) toString() string {
	return "name : " + p.name + ", age : " + strconv.Itoa(p.age)
}

type Education struct {
	name  string
	grade string
}

func (p Person) setEducation(name string, grade string) {
	p.education.name = name
	p.education.grade = grade
}

func (p Person) getEducation() string {
	return p.education.grade
}

func main() {
	e := Education{}
	person := Person{"Joker", 33, e}

	fmt.Println(person)

	person2 := Person{}
	person2.name = "Wein"
	person2.age = 34

	fmt.Println(person2)

	fmt.Println(person2.toString())

	education := Education{"PHP", "A"}
	person3 := Person{"Sunday", 35, education}
	fmt.Println(person3.getEducation())

	person3.setEducation("JAVA", "B")
	fmt.Println(person3.getEducation()) //not changed?

}
