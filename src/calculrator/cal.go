package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("input some number")
	reader := bufio.NewReader(os.Stdin)

	line, _ := reader.ReadString('\n')
	line = strings.TrimSpace(line)

	n1, _ := strconv.Atoi(line)

	line, _ = reader.ReadString('\n')
	line = strings.TrimSpace(line)

	n2, _ := strconv.Atoi(line)

	fmt.Printf("check your input %d, %d.", n1, n2)

	fmt.Println("input some operator. [+,-,/,*]")
	line, _ = reader.ReadString('\n')
	line = strings.TrimSpace(line)

	if line == "+" {
		printfEmp("%d + %d = %d", n1, n2, n1+n2)
	} else if line == "-" {
		printfEmp("%d - %d = %d", n1, n2, n1-n2)
	} else if line == "*" {
		printfEmp("%d * %d = %d", n1, n2, n1*n2)
	} else if line == "/" {
		printfEmp("%d / %d = %d", n1, n2, n1/n2)
	} else {
		printEmp("wrong operend")
	}

}

func printEmp(str string) {
	fmt.Println("===============================")
	fmt.Println(str)
	fmt.Println("===============================")
}

func printfEmp(format string, a ...interface{}) {
	fmt.Println("\n===============================")
	fmt.Printf(format, a...)
	fmt.Println("\n===============================")
	fmt.Println("\n ")
}
