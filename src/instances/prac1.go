package main

import "fmt"

type Student struct {
	name  string
	age   int
	grade int
}

func walk(s Student) {
	fmt.Println(s.name + " IS NOW WALKING...")
}

// func setName(s Student, newName string) {
// 	s.name = newName
// }

func setName(s *Student, newName string) {
	s.name = newName
}

func (s *Student) setAge(age int) {
	s.age = age
}

func main() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	a := Student{"BruceWayne", 17, 1}

	b := a

	var c *Student
	c = &a

	fmt.Println(a, b, c)
	fmt.Printf("%p, %p, %p \n", &a, &b, &c)

	b.name = "Joker"
	c.name = "Riddler"
	fmt.Println(a, b, c)

	walk(a)

	// setName(a, "DarkKnight") //not working
	setName(&a, "DarkKnight") //not working

	fmt.Println(a)

	a.setAge(31)

	fmt.Println(a)

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}
