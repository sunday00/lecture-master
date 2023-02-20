package pkg

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"time"
)

type myInt int64 // aliasing type.

func (p Pkg) Primitive() {
	var a int = 10

	var msg string = "Hello Variable"

	//var msg2 string = 'hello?'  // '' is char
	var char = 'c' // char default ascii

	a += 2

	fmt.Println(a, msg, char)

	var char2 rune = 'c'

	fmt.Println(char2)
}

func (p Pkg) Integers() {
	var a uint8 = 1

	var b byte = 255
	//var b byte = 256

	var c uint8 = 255

	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(b == c)

	var d uint16 = 65535

	fmt.Println(d)

	var e uint32 = 4_294_967_295

	fmt.Println(e)

	var f uint64 = 18446744073709551615

	//var ff float64 = 0.01

	fmt.Println(f)

	var myint myInt = 111 // aliasing type.
	fmt.Println(myint)

	h := 1
	fmt.Println(h) // define and assign === var h int = 1

}

func (p Pkg) Casting() {
	a := 1
	b := 0.1

	//fmt.Println(a + b) // impossible
	fmt.Println(float64(a) + b)

	var c int = 9
	var d int64 = 10

	//fmt.Println(c + d) // impossible too
	fmt.Println(int64(c) + d)
	fmt.Println(c + int(d))
	fmt.Println(int32(c) + int32(d))

	e := 999

	fmt.Println(int8(e)) //convert minus

}

var globalVari int = 10

func (p Pkg) Scope() {
	var localVari int = 8

	{
		var scopeVari int = 7

		fmt.Println(globalVari, localVari, scopeVari)
	}

	//fmt.Println(globalVari, localVari, scopeVari) //fail.
	// empty just scope can encapsulate also.

	fmt.Println(globalVari, localVari)
}

func (p Pkg) FloatLimit() {
	var a float32 = 123.123456789
	fmt.Println(a) // 123.12346

	var b float32 = 1.123456789
	fmt.Println(b) // 123.1234568 // max .n X 7

	var c float64 = 1.1234567890123456789012345678901234567890
	fmt.Println(c) // 1.1234567890123457 // max .n X 16
}

func (p Pkg) PickRandom() {
	if len(os.Args) < 4 {
		_, err := fmt.Fprintln(os.Stderr, "invalid args \n txtPath, howMany needed.")
		if err != nil {
			return
		}
		return
	}

	filePath := os.Args[2]
	howMany, err := strconv.Atoi(os.Args[3])
	if err != nil {
		fmt.Println(err.Error())
		fmt.Println("maybe howMany is not numeric")
		return
	}

	candidates, err := readCandidates(filePath)
	if err != nil {
		fmt.Println(err.Error())
		fmt.Println("maybe path is wrong")
		return
	}

	rand.Seed(time.Now().UnixNano())

	winners := make([]string, howMany)
	for i := 0; i < howMany; i++ {
		n := rand.Intn(len(candidates))
		winners[i] = candidates[n]
		candidates = append(candidates[:n], candidates[n+1:]...)
	}

	println("======winners======")
	for _, winner := range winners {
		println(winner)
	}
}

func readCandidates(path string) ([]string, error) {
	file, err := os.Open(path)

	if err != nil {
		return nil, err
	}

	defer closeFile(file)

	scanner := bufio.NewScanner(file)

	var candidates []string
	for scanner.Scan() {
		candidates = append(candidates, scanner.Text())
	}

	return candidates, nil
}

func closeFile(file *os.File) {
	err := file.Close()
	if err != nil {
		println(err.Error())
	}
}

func (p Pkg) template() {

}
