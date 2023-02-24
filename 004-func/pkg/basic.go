package pkg

func (p Pkg) Basic() {
	a, b := getX2andX3(4)

	println(a, b)

	c, d := namedReturn(3, 0)
	println(c, d)

	recursive(1)

	const e = 1

	const (
		apple int = iota // auto increment value
		orange
		cherry
		banana
	)

	println(apple, orange, cherry, banana)

	const (
		bitFlag1 uint8 = 1 << iota
		bitFlag2
		bitFlag3
		bitFlag4
		bitFlag5
		bitFlag6
		bitFlag7
	)

	println(bitFlag1, bitFlag2)
}

func getX2andX3(n int) (int, int) { // go func can return multiple
	return n * 2, n * 3
}

func namedReturn(n int, m int) (result int, success bool) {
	if m == 0 {
		result = 0
		success = false
		return
	}

	result = n / m
	success = true
	return
}

func recursive(n int) {
	n++

	println(n)

	if n > 10 {
		return
	}

	recursive(n)
}

func (p Pkg) template() {

}
