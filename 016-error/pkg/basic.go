package pkg

import (
	"bufio"
	"fmt"
	"github.com/sunday00/go-console"
	"os"
)

func (p Pkg) Basic() {
	filename := "ex.txt"
	line, err := ReadFile(filename)
	if err != nil {
		console.PrintColoredLn("Trying to write something.", console.Warning)
		err = WriteFile(filename, "something writing. ")
		if err != nil {
			console.PrintColoredLn("failed to read and writing", console.Panic)
		}
	}

	println(line)
}

func CloseFile(file *os.File) {
	err := file.Close()
	if err != nil {
		println(err)
	}
}

func ReadFile(filename string) (string, error) {
	file, err := os.Open(filename)

	if err != nil {
		return "", err
	}

	defer CloseFile(file)

	rd := bufio.NewReader(file)
	line, _ := rd.ReadString('\n')

	return line, nil
}

func WriteFile(filename string, line string) error {
	file, err := os.Create(filename)
	if err != nil {
		return err
	}

	defer CloseFile(file)

	_, err = fmt.Fprintln(file, line)

	return err
}
