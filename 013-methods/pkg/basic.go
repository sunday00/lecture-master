package pkg

import "fmt"

type Account struct {
	balance   int
	firstname string
	lastname  string
}

// go has no constructor.
// Instead, make newAccount method

func withdraw(a *Account, amount int) {
	a.balance -= amount
}

func (a *Account) withdrawMethod(amount int) {
	a.balance -= amount
}

func (a Account) withdrawNormalMethod(amount int) Account {
	a.balance -= amount
	return a
}

func (p Pkg) Basic() {
	a := &Account{100, "", ""}

	withdraw(a, 30)

	a.withdrawMethod(30)

	println(a.balance)
}

func (p Pkg) MethodType() {
	a := Account{1000, "kim", "hoon"}
	a.withdrawMethod(30)

	b := &Account{1500, "lee", "gosu"}
	*b = b.withdrawNormalMethod(30)

	fmt.Printf("%v %v \n", a, b)
}

type Drivable struct{}

func (d Drivable) drive() {
	println("Brrrr...")
}

type Car struct {
	Drivable
}

func (p Pkg) Ride() {
	c := Car{}
	c.drive()
}

func (p Pkg) template() {

}
