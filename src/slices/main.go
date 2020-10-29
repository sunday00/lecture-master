package main

import "fmt"

func main() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	var a []int
	b := []int{1}
	c := make([]int, 3)
	d := make([]int, 3, 8)

	fmt.Println(a, len(a), cap(a))
	fmt.Println(b, len(b), cap(b))
	fmt.Println(c, len(c), cap(c))
	fmt.Println(d, len(d), cap(d))

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	fmt.Printf("%p\n", a)

	a = append(a, 1)

	fmt.Println(a, len(a), cap(a))
	fmt.Printf("%p\n", a)

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}
