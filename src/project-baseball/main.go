package main

import (
	"fmt"
)

func main() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	var numbers [3]int = MakeNumbers()
	fmt.Println(numbers)
	score := 100
game:
	for {
		score -= 10

		answer := Answer()

		result := CheckCorrect(numbers, answer)

		if IsEnded(result) {
			break game
		}
	}

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")
}
