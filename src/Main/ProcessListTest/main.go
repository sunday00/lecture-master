package main

import (
	"fmt"

	processList "../../processList"
)

func main() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	a := &processList.SliceStack{}
	a.Push(1)
	a.Push(2)
	a.Push(3)
	a.Push(4)

	a.DoLoop(fmt.Println)

	fmt.Println(a.Get())
	fmt.Println(a.Get())
	fmt.Println(a.Get())
	fmt.Println(a.Get())
	fmt.Println(a.Get())

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}
