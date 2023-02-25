package pkg

func (p Pkg) Basic() {
	var a int
	var ap *int

	ap = &a

	println(ap, *ap)
}

func (p Pkg) LeftRight() {
	var a int
	var ap *int

	a = 500
	ap = &a

	println(a, ap, *ap)

	*ap = 100

	println(a, ap, *ap)

	b := ap
	c := &ap
	d := *ap

	println(b, c, d, " | ", &b, *b, " | ", &c, *c, **c)
}

func (p Pkg) Reason() {
	type Data struct {
		value int
		data  [200]int
	}

	var chgData = func(arg Data) {
		arg.value = 999
		arg.data[100] = 999
	}

	var data Data
	chgData(data)

	println(data.value, data.data[100]) // 0, 0 . not changed.
	// inner func values are always isolated.

	var realChgData = func(arg *Data) {
		arg.value = 999
		arg.data[100] = 999
	}

	realChgData(&data)

	println(data.value, data.data[100]) // 999, 999. yeah, surely this can be worked
}

func (p Pkg) StackAndHeap() {
	type User struct {
		name string
		age  int
	}

	var createUser = func(name string, age int) *User {
		var u = User{name, age}
		return &u
	}

	// 이론적으로는, 혹은 c, c++ 등 전통적 포인터 언어에서는 이 스코프에서 u가 생명주기가 끝난다.
	// 통상 go를 포함한 대부분의 언어는 함수를 통해 만든 지역변수를 스택메모리에 쌓고,
	// 해당 지역변수를 스택에서 역으로 꺼내 쓰다 모두 꺼내쓰면 GC로 인스턴스를 제거한다.
	// 때문에 &u 는 없는 인스턴스를 가르키는 포인터가 되고, 이를 받는 user 는 빈 인스턴스를 가르키는 포인터가 된다.
	// 이때 발생하는 에러를 dangle 에러라고 한다.

	// 그러나 go 에서는 생명주기가 끝나는 시점에도 escape analyze 를 한뒤,
	// 로컬 스코프를 벗어나 이용되는 지역변수를 파악한 뒤,
	// 해당 인스턴스를 스택이 아니라 heap 메모리에 옮긴다.
	// 때문에 go 에서는 dangle error 가 발생하지 않는다.

	var user = createUser("ko", 33)

	println(user.name, user.age)
}

func (p Pkg) template() {

}
