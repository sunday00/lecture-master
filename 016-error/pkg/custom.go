package pkg

import (
	"errors"
	"fmt"
	"github.com/sunday00/go-console"
	"math"
)

func (p Pkg) Custom() {
	sqrt, err := Sqrt(-2)
	if err != nil {
		fmt.Printf("err : %v\n", err)
		return
	}

	fmt.Println(sqrt)
}

func Sqrt(f float64) (float64, error) {
	if f < 0 {
		//return 0, fmt.Errorf("argument should > 0 f:%g", f)
		return 0, errors.New("argument should > 0")
	}
	return math.Sqrt(f), nil
}

func (p Pkg) CustomError() {
	if err := RegisterAccount("sunn", "qwer"); err != nil {
		if errInfo, ok := err.(PasswordError); ok {
			println(errInfo.Len, errInfo.RequiredLen)
			console.PrintColoredF("required password %d, but %d given \n", console.Panic, errInfo.RequiredLen, errInfo.Len)
			return
		}
	}

	console.PrintColoredLn("welcome", console.Success)
}

type PasswordError struct {
	Len         int
	RequiredLen int
}

func (err PasswordError) Error() string {
	return "To short..."
}

func RegisterAccount(name, password string) error {
	if len(password) < 8 {
		return PasswordError{len(password), 8}
	}

	return nil
}

func (p Pkg) sample() {

}
