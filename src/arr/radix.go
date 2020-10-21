package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {

	rand.Seed(time.Now().UnixNano())
	min := 0
	max := 9

	arr := [10]int{}
	for i := 0; i < len(arr); i++ {
		arr[i] = rand.Intn(max-min+1) + min
	}

	fmt.Println(arr)

	tmp := [10]int{}

	for i := 0; i < len(arr); i++ {
		num := arr[i]
		tmp[num]++
	}

	fmt.Println(tmp)

	idx := 0
	for i := 0; i < len(tmp); i++ {
		for j := 0; j < tmp[i]; j++ {
			arr[idx] = i
			idx++
		}
	}

	fmt.Println(arr)
}
