package pkg

import (
	"fmt"
	"os"
	"strconv"
)

func (p Pkg) StateIf() {
	if success := uploaded(); success {
		println("success")
	} else {
		println("fail")
	}
}

func uploaded() bool {
	return true
}

func (p Pkg) StateSwitch() {
	switch i, _ := strconv.ParseInt(os.Args[2], 10, 8); i {
	case 1:
		fmt.Println("small")
	case 2:
		println("Ho~")
	default:
		println("finish~")
	}

	i, _ := strconv.ParseInt(os.Args[2], 10, 8)
	switch i {
	case 1, 2, 3, 4, 5:
		fmt.Println("small")
	case 6, 7, 8, 9, 10:
		println("big")
	default:
		println("Huge!")
	}

	switch true {
	case i <= 4:
		fmt.Println("small")
	case i >= 5, i <= 10:
		println("big")
	default:
		println("Huge!")
	}
}

type ColorType int

const (
	Red ColorType = iota
	Green
	Blue
	Yellow
	Black
	White
)

func colorToString(colorType ColorType) string {
	switch colorType {
	case Red:
		return "Red"
	case Blue:
		return "Blue"
	default:
		return "undefined"
	}
}

func (p Pkg) NoBreak() {
	i, _ := strconv.ParseInt(os.Args[2], 10, 8)

	switch true {
	case i <= 5:
		fmt.Println("small")
		fallthrough
	case i <= 10:
		fmt.Println("little small")
		fallthrough
	case i <= 20:
		fmt.Println("medium")
		fallthrough
	case i >= 21:
		fmt.Println("big")
		fallthrough
	default:
		println("always run")
	}
}

func (p Pkg) template() {

}
