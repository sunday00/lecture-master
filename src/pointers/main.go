package main

import (
	"fmt"
)

func main() {

	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	var a int = 1
	var p *int = &a

	fmt.Println(p)
	fmt.Println(*p)

	TestInc()

	CheckRefInMethod()

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")
}
