package pkg

import "fmt"

func (p Pkg) Primitive() {
	var a int = 10

	var msg string = "Hello Variable"

	//var msg2 string = 'hello?'  // '' is char
	var char = 'c' // char default ascii

	a += 2

	fmt.Print(a, msg, char)
}
