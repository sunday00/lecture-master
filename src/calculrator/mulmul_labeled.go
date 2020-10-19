package main

import "fmt"

func main() {
leftSide:
	for i := 2; i <= 9; i++ {
		fmt.Printf("====== %d =======\n", i)
		// rightSide:
		for j := 1; j <= 9; j++ {
			fmt.Printf("%d * %d = %d \n", i, j, i*j)
			if i == 4 && j == 4 {
				break leftSide
			}
		}
	}
}
