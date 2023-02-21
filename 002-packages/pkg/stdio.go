package pkg

import (
	"bufio"
	"fmt"
	"os"
)

func (p Pkg) Basic() {
	a := 10
	b := 1.1
	fmt.Printf("a: %d b: %f \n", a, b)
	fmt.Printf("a: %T b: %T \n", a, b)
	fmt.Printf("a: %v b: %v \n", a, b)
	fmt.Printf("a: %t b: %t \n", (1 == 1), false)

	fmt.Printf("%q \n", "\nhello\t")

	c := 11
	d := 134579
	fmt.Printf("%5d \n", a)       // fill blank until 5 length
	fmt.Printf("%05d \n", a)      // fill 0 until 5 len
	fmt.Printf("%-5d%5d\n", a, c) // fill blank after var
	fmt.Printf("%03d\n", d)       // not cut var. all digit print. only short len var fills more

	e := 34564455.78916666011233455
	fmt.Println(e)        // convert e number. ln is basically %g -> short float can just float, long float convert to e^10
	fmt.Printf("%f\n", e) // force %f

	n, err := fmt.Scanln(&a, &b)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(n, a, b)
}

func (p Pkg) Buffer() {
	stdIn := bufio.NewReader(os.Stdin)

	var a int
	var b int

	_, err := fmt.Scanln(&a, &b)
	if err != nil {
		fmt.Println(err)
		_, _ = stdIn.ReadString('\n') // read and dump away until contact the letter.
		// if this is not coded, next buffer, read next remains letter immediately.
	}

	fmt.Println(a, b)

	_, err = fmt.Scanln(&a, &b)
	if err != nil {
		fmt.Println(err)
		_, _ = stdIn.ReadString('\n')
		return
	}

	fmt.Println(a, b)

}

func (p Pkg) template() {

}
