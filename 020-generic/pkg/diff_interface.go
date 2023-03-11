package pkg

import "fmt"

func (p Pkg) GenericFunc() {
	doubled := Map([]int{1, 2, 3}, func(v int) int {
		return v * 2
	})

	fmt.Printf("%v \n", doubled)
}

func Map[F, T any](s []F, f func(F) T) []T {
	rst := make([]T, len(s))
	for i, v := range s {
		rst[i] = f(v)
	}

	return rst
}
