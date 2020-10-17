package main

import (
	"fmt"
	"reflect"
)

func main() {
	fmt.Println("hello world")

	var a int = 3
	// int == int64
	var b int = 4
	var c int8 = 5
	var d uint16 = 10

	fmt.Println(a + b)
	fmt.Println(c, d)

	fmt.Println(reflect.TypeOf("a"))
}
