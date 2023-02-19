package pkg

import (
	"fmt"
)

type Pkg struct{}

func (p Pkg) Hello() {
	fmt.Println("hello.go world")
}
