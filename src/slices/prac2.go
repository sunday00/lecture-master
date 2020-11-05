package main

import "fmt"

func prac2() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	a := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	fmt.Println(a)

	a2 := a[4:8]
	fmt.Println(a2)

	a3 := a[5:]
	fmt.Println(a3)

	a4 := a[:3]
	fmt.Println(a4)

	a5 := a[:len(a)]
	fmt.Println(a5)

	fmt.Printf("%p %p %p %p \n", a, a2, a3, a4)
	fmt.Printf("%p %p \n", a, a5)

	a2[0] = 100
	fmt.Println(a)

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	fmt.Print(a4, len(a4), cap(a4))

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	b := []int{1, 2}
	fmt.Println(b, len(b), cap(b))

	b = append(b, 3)
	fmt.Println(b, len(b), cap(b))

	b = append(b, 4)
	fmt.Println(b, len(b), cap(b))

	b = append(b, 5)
	fmt.Println(b, len(b), cap(b))

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	c := []int{1, 2}
	c2 := []int{1, 2}

	fmt.Println(c, c2)
	fmt.Printf("\n %p, %p \n", c, c2)

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}
