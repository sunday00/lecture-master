package main

import (
	"fmt"

	"github.com/sunday00/go-console"

	pkg "./pkg"
)

func main() {
	console.PrintColoredLn("\n============= start go app =============\n", console.Warning)

	fmt.Println("START SELECT EXAMPLE")
	pkg.Basic0()

	console.PrintColoredLn("\n============== terminated ==============\n", console.Warning)

}
