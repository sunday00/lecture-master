package pkg

import (
	"bufio"
	"errors"
	"fmt"
	"strconv"
	"strings"
)

func (p Pkg) Wrapping() {
	readEq("123 3")
	readEq("123 abc")
}

func MultipleFromString(str string) (int, error) {
	scanner := bufio.NewScanner(strings.NewReader(str))

	scanner.Split(bufio.ScanWords)

	pos := 0

	a, n, err := readNextInt(scanner)
	if err != nil {
		return 0, fmt.Errorf("fail. pos:%d err:%w \n", pos, err)
	}

	pos += n + 1

	b, n, err := readNextInt(scanner)

	if err != nil {
		return 0, fmt.Errorf("fail. pos:%d err:%w \n", pos, err)
	}

	return a * b, nil
}

func readNextInt(scanner *bufio.Scanner) (int, int, error) {
	if !scanner.Scan() {
		return 0, 0, fmt.Errorf("failed to scan")
	}

	word := scanner.Text()

	number, err := strconv.Atoi(word)
	if err != nil {
		return 0, 0, fmt.Errorf("failed to convert word")
	}

	return number, len(word), nil
}

func readEq(eq string) {
	rst, err := MultipleFromString(eq)
	if err == nil {
		println(rst)
	} else {
		println(err.Error())
		var numError *strconv.NumError
		if errors.As(err, &numError) {
			println("numberError", numError.Error())
		}
	}
}
