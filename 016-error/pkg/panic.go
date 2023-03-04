package pkg

func (p Pkg) PanicEx() {
	panic("Oops...")
}

func (p Pkg) RecoverEx() {
	f()
	println("done")
}

func f() int {
	println("start")
	defer func() {
		if r := recover(); r != nil {
			println("recovered")
		}
	}()

	g()

	return 1
}

func g() {
	panic("Oops...")
}

func (p Pkg) template() {

}
