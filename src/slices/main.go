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

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	e := make([]int, 2, 4)
	e[0] = 1
	e[1] = 2

	f := append(e, 3)

	fmt.Println(e)
	fmt.Println(f)
	fmt.Printf("%p, %p \n", e, f)

	f[0] = 11
	f[1] = 12

	fmt.Println(e)
	fmt.Println(f)

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	g := []int{1, 2}

	h := append(g, 3)

	fmt.Println(g)
	fmt.Println(h)
	fmt.Printf("%p, %p \n", g, h)

	h[0] = 11
	h[1] = 12

	fmt.Println(g)
	fmt.Println(h)

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	i := []int{1, 2}

	j := make([]int, len(i))
	for idx := 0; idx < len(i); idx++ {
		j[idx] = i[idx]
	}
	j = append(j, 3)

	fmt.Println(i)
	fmt.Println(j)
	fmt.Printf("%p, %p \n", i, j)

	j[0] = 11
	j[1] = 12

	fmt.Println(i)
	fmt.Println(j)

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}
