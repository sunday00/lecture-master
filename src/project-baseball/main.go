package main

import (
	"fmt"
)

func main() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	var numbers [3]int = MakeNumbers()
	// fmt.Println(numbers)

	score := 110
	var history string = fmt.Sprint("\n")

game:
	for {
		score -= 10

		answer := Answer()

		result := CheckCorrect(numbers, answer)

		history = history + fmt.Sprintf("%d%d%d : %s\n", answer[0], answer[1], answer[2], result)

		if IsEnded(result, score, history) {
			break game
		}
	}

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")
}
