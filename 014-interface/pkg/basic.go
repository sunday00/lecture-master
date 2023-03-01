package pkg

import "fmt"

type Transfer interface {
	Drive()
	Ignite()
	Stop()
}

type truck struct {
	Name        string
	Manufacture string
}

func (t truck) Drive() {
	println("Brrr")
}

func (t truck) Ignite() {
	println("engin start")
}

func (t truck) Stop() {
	println("engin stop")
}

type bicycle struct {
	Name        string
	Manufacture string
}

func (b bicycle) Drive() {
	println("ring ring")
}

func (b bicycle) Ignite() {
	println("starting healthy!")
}

func (b bicycle) Stop() {
	println("hoo...")
}

func (p Pkg) Basic() {
	t := truck{"BooBoo", "BMW"}
	var transfer Transfer

	transfer = t

	transfer.Drive()
}

type Reader interface {
	Read()
	Close()
}

type Writer interface {
	Write()
	Close()
}

type File interface {
	Reader
	Writer
}

func (p Pkg) Blank() {
	commonPrint("Hello string")
	commonPrint(1)
	commonPrint(1.4)
	commonPrint(truck{"Bii", "Man"})
}

func commonPrint(v interface{}) { // TS any, JAVA object, php mixed
	fmt.Printf("type %T %v \n", v, v)
}

func (p Pkg) Extract() {
	b := bicycle{Name: "bororo"}

	fix(b)
}

func fix(transfer Transfer) {
	if fmt.Sprintf("%T", transfer) == "pkg.bicycle" {
		bike := transfer.(bicycle) // pick from interface like cast
		println(bike.Name)
	}

	bike, ok := transfer.(bicycle) // pick from interface like cast with error handle
	if ok {
		println(bike.Name)
	}

	if bike, ok = transfer.(bicycle); ok { // pick from interface like cast with error handle
		println(bike.Name)
	}

}

func (p Pkg) template() {

}
