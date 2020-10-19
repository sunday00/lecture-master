package main

import "fmt"

func main() {
	for i := 2; i <= 9; i++ {
		fmt.Printf("====== %d =======\n", i)
		for j := 1; j <= 9; j++ {
			fmt.Printf("%d * %d = %d \n", i, j, i*j)
		}
	}
}
