package main

import (
	"os"
	"pkg/pkg"
	"reflect"
)

func main() {
	p := pkg.Pkg{}
	method := reflect.ValueOf(p).MethodByName(os.Args[1])
	method.Call(nil)
}
