package pkg

import (
	"fmt"
	"github.com/sunday00/go-console"
)

func (p Pkg) Basic() {
	s := []int{1, 2, 3}
	fmt.Printf("%T %v \n", s, s)

	ss := []int{1, 2, 5: 6, 10: 8}
	fmt.Printf("%v\n", ss)

	sss := make([]int, 3)
	console.PrintColoredF("%v\n", console.Info, sss)

	ss[2] = 7
	fmt.Printf("%v\n", ss)
}

func (p Pkg) Append() {
	s := []int{1, 2, 3}

	s = append(s, 4)

	fmt.Printf("%T %v \n", s, s)

	//s[4] = 5 // not working
	//fmt.Printf("%T %v \n", s, s)

	_ = append(s, 5)
	fmt.Printf("%T %v \n", s, s)

	fmt.Println(cap(s))

	// ===================================
	sss := make([]int, 3, 7)
	fmt.Println(cap(sss))

	sss2 := append(sss, 4)
	fmt.Println(cap(sss), sss, sss2)

	sss2[1] = 100
	fmt.Println(cap(sss), sss, sss2)
	// slice 는 현재사용량, 최대량을 만들 수 있다.
	// 최대 7인데 3만큼 일단 초기화 하라고 한 후 : make T,3,7
	// 여유 공간이 아직 있으므로 4를 기존 원본배열에 넣고 sss2로 함께 참조한다.
	// 이때 sss 는 0~2까지만 여전히 포인팅 하고 있고,
	// sss2는 0~3까지만 포인팅 하고 각각 4, 3의 여유 공간을 남기게 된다.
	// 그리고 나서 둘의 공통 부분에 값을 바꾸면 sss 와 sss2 둘다 값이 바뀌게 된다.
	// 둘의 원본 배열이 같은 배열을 가르키고 있기 때문이다.

	ssss := make([]int, 3, 3)
	fmt.Println(cap(ssss))

	ssss2 := append(ssss, 4)
	fmt.Println(cap(ssss), ssss, ssss2)

	ssss2[1] = 100
	fmt.Println(cap(ssss), ssss, ssss2)
	// 이와는 다르게, make 시 여유량을 빠듯하게 둔 후
	// 새로운 값을 추가한 뒤 ssss2를 만들면, 기존의 원본을 완전히 복사하여 새로운 원본배열을 만든다.
	// 참조만 하는 것이 아님
	// 그 뒤 ssss 나 ssss2 의 값을 변경하면,
	// 둘이 가르키는 원본배열이 별개로 작동하므로, 독립적으로 작동한다.
}

func (p Pkg) CompareArray() {
	a := [5]int{1, 2, 3, 4, 5}
	s := []int{1, 2, 3, 4, 5}

	changeArray(a) // this is not change
	changeSlice(s)

	fmt.Println(a, s)

	changeArrayReal(&a)

	fmt.Println(a, s)

	// slice 는 real array data 를 따로 두고, 이를 가르키는 포인터 타입으로 동작한다.
	// 때문에 함수에 넣을때도 별다른 조치 없이 포인터가 복사되므로,
	// 본체 배열을 가르키게 되고,
	// 함수 안에서도 본체 배열을 조작할 수 있게 된다.
	// 또, 일반 배열은 크기가 커지면, 함수 안에서 복사를 하므로, 큰 크기의 배열은 많은 메모리 복사가 발생하지만,
	// slice 는 포인터 타입만 복사되므로 일반적으로 작은 메모리 복사가 발생한다.
}

func changeArray(arr [5]int) {
	arr[2] = 100
}

func changeSlice(slice []int) {
	slice[2] = 100
}

func changeArrayReal(arr *[5]int) {
	arr[2] = 100
}

func (p Pkg) template() {

}
