package pkg

import "math"

func (p Pkg) Basic() {
	a := 0.1
	b := 0.2
	c := 0.3

	println(a+b == c)
	println(a, b, c)
	println(a+b, c)

	println(equal(a+b, c))

	a, b = b, a // go can easily switch values each

	println(a, b)
}

func equal(x, y float64) bool {
	return math.Nextafter(x, y) == y // NextAfter means x go head to y by 1bit!
}

func (p Pkg) template() {

}
