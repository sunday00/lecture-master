package main

import "fmt"

// TestInc void just for test
func TestInc() {
	var a int
	a = 1

	increase(a)

	fmt.Println(a)

	increaseRef(&a)
	fmt.Println(a)
}

func increase(num int) {
	num = num + 1
}

func increaseRef(num *int) {
	*num = *num + 1
}
