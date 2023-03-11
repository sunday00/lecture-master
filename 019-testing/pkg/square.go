package pkg

func (p Pkg) Square() {
	println(square(9))
}

func square(x int) int {
	return x * x
}

func (p Pkg) Fibonacci() {
	println(fibonacci(13))
}

func (p Pkg) Fibonacci2() {
	println(fibonacci2(13))
}

func fibonacci(n int) int {
	if n < 0 {
		return 0
	}

	if n < 2 {
		return n
	}

	return fibonacci(n-1) + fibonacci(n-2)
}

var m map[int]int

func fibonacci12(n int) int {
	if n < 0 {
		return 0
	}

	if n < 2 {
		return n
	}

	if m == nil {
		m = make(map[int]int)
	}

	if v, ok := m[n]; ok {
		return v
	}

	v := fibonacci(n-1) + fibonacci(n-2)

	m[n] = v

	return v
}

func fibonacci2(n int) int {
	if n < 0 {
		return 0
	}

	if n < 2 {
		return n
	}

	one := 1
	two := 0
	rst := 0

	for i := 2; i <= n; i++ {
		rst = one + two
		two = one
		one = rst
	}

	return rst
}

func (p Pkg) template() {

}
