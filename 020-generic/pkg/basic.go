package pkg

import "golang.org/x/exp/constraints"

func min[T constraints.Ordered](a, b T) T {
	if a < b {
		return a
	}

	return b
}

func (p Pkg) Basic() {
	min(1, 4)
}

func (p Pkg) UsingTilt() {
	var a myInt = 1
	var b myInt = 2

	max(a, b)
}

type myInt int

type MyIntAndOrdered interface {
	~int | constraints.Ordered
}

func max[T MyIntAndOrdered](a, b T) T {
	if a > b {
		return a
	}

	return b
}
