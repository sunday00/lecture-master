package pkg

import "fmt"

func (p Pkg) Basic() {
	var a [5]int = [5]int{1, 3, 5, 7, 9}

	for i := 0; i < len(a); i++ {
		println(a[i])
	}
}

func (p Pkg) ValueByIndex() {
	a := [5]int{1: 66, 3: 7} // [0, 66, 0, 7, 0]

	for i := 0; i < len(a); i++ {
		println(a[i])
	}
}

func (p Pkg) UnknownLength() {
	a := [...]int{1, 3, 5, 7, 9} //this is assigned length later by real element length. Not dynamic length

	for i := 0; i < len(a); i++ {
		println(a[i])
	}
}

func (p Pkg) LengthIsConstant() {
	//var x = 10
	//a := [x]int{} //impossible

	const y = 10
	b := [y]int{}
	fmt.Printf("%v", b)
}

func (p Pkg) UsingRange() {
	var t = [5]int{1, 3, 6, 8, 10}
	for i, v := range t {
		println(i, v)
	}
}

func (p Pkg) Clone() {
	var a = [5]int{1, 3, 6, 8, 10}
	var b = a

	b[2] = 99

	fmt.Printf("a[2] %d, b[2] %d", a[2], b[2]) // 6, 99 // go clone array deeply
}

func (p Pkg) Matrix() {
	var a = [2][5]int{{1, 3, 6, 8, 10}, {33, 44, 55, 66, 99}}
	for _, v := range a {
		for _, vv := range v {
			println(vv)
		}
	}
}

func (p Pkg) template() {

}
