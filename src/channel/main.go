package main

import (
	"fmt"

	"github.com/sunday00/go-console"

	pkg "./pkg"
)

func main() {
	print("\033[H\033[2J")
	console.PrintColoredLn("\n============= start go app =============\n", console.Warning)

	pkg.BasicExample()

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	pkg.CarFactory()
	pkg.CarFactory2()

	console.PrintColoredLn("\n============== terminated ==============\n", console.Warning)

}
