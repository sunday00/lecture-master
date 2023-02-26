package pkg

import "fmt"

type Pkg struct{}

var (
	a = c + b
	b = f()
	c = f()
	d = 3
)

func init() {
	d++
	fmt.Println("init", d)
}

func f() int {
	d++
	fmt.Println("f() d:", d)

	return d
}

func printD() {
	fmt.Println("d", d)
}
