package main

import (
	"fmt"

	"github.com/sunday00/go-console"

	parts "./parts"
)

func main() {
	console.PrintColoredLn("\n============= start go app =============\n", console.Warning)

	parts.Part1()

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	parts.Part2()

	console.PrintColoredLn("\n============== terminated ==============\n", console.Warning)

}
