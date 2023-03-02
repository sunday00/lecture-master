package pkg

import (
	"fmt"
	"os"
)

func (p Pkg) Spread() {
	println(sum(1, 2, 3))

	fmt.Printf("%.2f \n", sumAnyType(1, 1.1, 2, 3.14))

	fmt.Printf("%.2f \n", sumOnlyNumericType(1, 2, 3, 4))
	fmt.Printf("%.2f \n", sumOnlyNumericType(1.1, 1.1, 2.1, 3.14))
}

func sum(nums ...int) int {
	sum := 0

	for _, v := range nums {
		sum += v
	}

	return sum
}

func sumAnyType(nums ...interface{}) float64 {
	sum := 0.0

	for _, v := range nums {
		switch v.(type) {
		case int:
			sum += float64(v.(int))
		case float64:
			sum += v.(float64)
		}
	}

	return sum
}

//type numeric interface {
//	int|float64
//}

func sumOnlyNumericType[V float64 | int](nums ...V) float64 {
	sum := 0.0

	for _, v := range nums {
		var x interface{} = v
		switch x.(type) {
		case int:
			sum += float64(x.(int))
		case float64:
			sum += x.(float64)
		}
	}

	return sum
}

func closeFile(f *os.File) {
	println("closing...")

	err := f.Close()
	if err != nil {
		println(err.Error())
		return
	}

	println("closed...")
}

func (p Pkg) Postpone() {
	f, err := os.Create("test.txt")
	if err != nil {
		println(err.Error())
		return
	}

	//defer println("now closing file")
	defer closeFile(f)
	//defer println("file closed")
	// run as stack. so, run by reverse order

	println("writing...")
	_, err = fmt.Fprintln(f, "HI")
	if err != nil {
		return
	}
}

func sumTwo(a, b int) int {
	return a + b
}

func (p Pkg) Signature() {
	var f func(int, int) int

	f = sumTwo

	println(f(1, 1))
}

func (p Pkg) Literal() {
	i := 0

	f := func() {
		i += 10 // working as closure. // able to use outer value
	}

	f()

	println(i)
}

func (p Pkg) CopyRefWarning() {
	fs := make([]func(), 3)

	for i := 0; i < 3; i++ {
		fs[i] = func() { println(i) }
	}

	fs[0]()
	fs[1]()
	fs[2]()

	// not 0, 1, 2
	// go 에서 closure 는 i를 ref 로만 복사하므로,
	// 0, 1, 2	가 아니라 [] 셋 모두 같은 i의 메모리를 참조하게 된다.
	// 때문에 loop 가 끝날때에는 이미 i가 3이 되고,
	// 클로져를 실행할 때에는 같은 i를 print 하게 된다.

	// 그렇다면 0, 1, 2는 어떻게 할까? 중간에 값복사를 한번 해주면 된다.

	for i := 0; i < 3; i++ {
		v := i // here is copy as value
		fs[i] = func() { println(v) }
	}

	println("==========")

	fs[0]()
	fs[1]()
	fs[2]()
}

func (p Pkg) sample() {

}
