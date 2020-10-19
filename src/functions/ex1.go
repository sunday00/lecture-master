package main

import "fmt"

func main() {
	var aa, bb int = sum(1, 2)
	fmt.Println(aa)
	fmt.Println(bb)
}

func sum(a, b int) (int, int) {
	return a + 1, b + 1
}
