package main

import "fmt"

func main() {
	arr := [5]int{1, 3, 5, 7, 9}
	clone := [5]int{}
	var clone2 []int

	i := 0
	for _, something := range arr {
		clone[i] = something
		i++
	}

	for y := len(arr) - 1; y >= 0; y-- {
		clone2 = append(clone2, arr[y])
	}

	fmt.Println(clone)
	fmt.Println(clone2)
}
