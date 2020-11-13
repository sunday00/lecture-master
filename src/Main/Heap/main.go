package main

import (
	"fmt"

	heap "../../heap"
)

func main() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	H := &heap.Heap{}

	H.Push(7)
	H.Push(4)
	H.Push(6)
	H.Push(9)
	H.Push(8)
	H.Push(2)
	H.Push(3)
	H.Push(4)
	H.Push(1)
	H.Push(2)
	H.Push(5)
	H.Push(0)

	H.Print()

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}
