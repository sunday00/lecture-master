package main

import "fmt"

func main() {

	// ================= try change this value
	max := 12
	var isDia bool = true
	var isHourglass = true
	// ================= try change this value

	if max%2 == 0 {
		max++
	}

	fmt.Print("\n")
	makeDivideLine(max)

	makePyramid(max, isHourglass, false)

	if isDia {
		makePyramid(max, !isHourglass, true)
	}

	makeDivideLine(max)
}

func makePyramid(max int, isReversed bool, isForDia bool) {
	if isReversed {
		var maximum int
		if isForDia {
			maximum = max - 2
		} else {
			maximum = max
		}

		for i := maximum; i >= 1; i = i - 2 {
			echoEsterik(max, i)
		}
	} else {
		var minimum int
		if isForDia {
			minimum = 3
		} else {
			minimum = 1
		}
		for i := minimum; i <= max; i = i + 2 {
			echoEsterik(max, i)
		}
	}

}

func echoEsterik(max int, i int) {
	fmt.Print("|")
	for j := 1; j <= max; j++ {
		space := (max - i) / 2
		if j <= space || j > space+i {
			fmt.Print(" ")
		} else {
			fmt.Print("*")
		}
	}
	fmt.Print("|\n")
}

func makeDivideLine(max int) {
	for bar := 1; bar <= max+2; bar++ {
		fmt.Print("-")
	}
	fmt.Print("\n")
}
