package main

import (
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
func Answer() int {
	return 222
}

// CheckCorrect compare two numbers and returns object result
func CheckCorrect(numbers [3]int, answer int) string {
	return "1S2B"
}

// IsEnded check 3S or not
func IsEnded(result string) bool {
	return false
}
