package main

import (
	"fmt"
	"strconv"

	helpers "../helpers"
)

// MakeNumbers makes random number of length 3
func MakeNumbers() [3]int {
	var tmp [3]int

	for i := 0; i < 3; i++ {
		tmp[i] = helpers.Rand(1, 9)
	}

	return tmp
}

// Answer returns concatenated inputted 3numbers
func Answer() [3]int {
	var result [3]int

	var no int
	for i := 0; i < 3; i++ {
		_, err := fmt.Scanf("%d\n", &no)
		if err != nil {
			fmt.Println(err)
			i--
			continue
		}

		if len(strconv.Itoa(no)) > 1 {
			fmt.Println("do not over 1 length")
			i--
			continue
		}

		result[i] = no
	}

	fmt.Println("====Your answer====\033[31;1m")
	fmt.Println(result)
	fmt.Println("\033[0m====Your answer====")

	return result
}

// CheckCorrect compare two numbers and returns object result
func CheckCorrect(numbers [3]int, answer [3]int) string {
	strike := 0
	ball := 0

	for i := 0; i < 3; i++ {

	}
	return "1S2B"
}

// IsEnded check 3S or not
func IsEnded(result string) bool {
	return false
}
