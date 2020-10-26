package main

import (
	"fmt"
	"strconv"
	"strings"

	helpers "../helpers"
)

// MakeNumbers makes random number of length 3
func MakeNumbers() [3]int {
	var tmp [3]int

out:
	for i := 0; i < 3; i++ {
		num := helpers.Rand(0, 9)
		for y := 0; y < i; y++ {
			if tmp[y] == num {
				i--
				continue out
			}
		}
		tmp[i] = num
	}

	return tmp
}

// Answer returns concatenated inputted 3numbers
func Answer() [3]int {
	var result [3]int

	var no int
out:
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

		for y := 0; y < i; y++ {
			if result[y] == no {
				fmt.Println("do not duplicate number")
				fmt.Print("\033[38;5;88m")
				fmt.Println(result)
				fmt.Println(" " + strings.Repeat(" ", i*2) + "^")
				fmt.Print("\033[0m")
				i--
				continue out
			}
		}

		result[i] = no

		fmt.Print("\033[38;5;88m")
		fmt.Println(result)
		fmt.Println(" " + strings.Repeat(" ", i*2) + "^")
		fmt.Print("\033[0m")
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
		for y := 0; y < 3; y++ {
			if numbers[i] == answer[i] {
				strike++
				break
			} else if numbers[i] == answer[y] {
				ball++
				break
			}
		}
	}

	return fmt.Sprintf("%dS%dB", strike, ball)
}

// IsEnded check 3S or not
func IsEnded(result string, score int, history string) bool {
	if result == "3S0B" {
		fmt.Println("\033[32;1m====SUCCESS====")
		fmt.Printf("score : %d\n", score)
		fmt.Println("===============\033[0m")
		return true
	} else if score == 10 {
		fmt.Println("\033[31;1m====FAIL====")
		fmt.Println("============\033[0m")
		return true
	}

	fmt.Println("\033[36;1m====Middle Result====")
	fmt.Printf("%s : remains %d\n", result, score/10-1)
	fmt.Println(history)
	fmt.Println("====Middle Result====\033[0m")

	return false
}
