package main

import (
	"fmt"

	"github.com/sunday00/go-console"

	task1 "./tasks"
)

func main() {
	print("\033[H\033[2J")
	console.PrintColoredLn("\n============= start go app =============\n", console.Warning)

	fmt.Println("go")

	task1.Task()

	console.PrintColoredLn("\n============== terminated ==============\n", console.Warning)

}
