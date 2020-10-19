package main

import (
	"fmt"

	helpers "../helpers"
)

func main() {
	x := 3

	switch {
	case x > 2:
		helpers.PrintEmp("big")
	case x < 3:
		helpers.PrintEmp("small")
	}

	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	y := 1
	for {
		fmt.Println(y)
		y++
		if y > 10 {
			break
		}
	}

}
