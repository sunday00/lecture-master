package main

import "fmt"

func main() {
	a := 4
	b := 2

	fmt.Println(a)
	fmt.Println(b)

	fmt.Printf("%v\n", a&b)
	fmt.Printf("%v\n", a|b)
	fmt.Printf("%v\n", a^b)
}
