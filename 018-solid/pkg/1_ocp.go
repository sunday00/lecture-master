package pkg

import "fmt"

func (p Pkg) Ocp() {

}

type Invoice struct {
	Title string
}

type SendType uint8

const (
	EMAIL SendType = iota
	FAX
	POST
	SMS
	SNS
)

//func SendInvoice(i *Invoice, via SendType, to string) {
//	switch via {
//	case EMAIL:
//		fmt.Printf("send %s to %s via Email \n", i.Title, to)
//	case FAX:
//		fmt.Printf("send %s to %s via Fax \n", i.Title, to)
//	case POST:
//		fmt.Printf("send %s to %s via Post \n", i.Title, to)
//	default:
//		fmt.Printf("Preparing \n")
//	}
//}

type InvoiceSender interface {
	Send(i *Invoice)
}

type EmailInvoiceSender struct {
	to string
}

func (e EmailInvoiceSender) Send(iv *Invoice) {
	fmt.Printf("send %s to %s via Post \n", iv.Title, e.to)
}

type FaxInvoiceSender struct {
	to string
}

func (f FaxInvoiceSender) Send(iv *Invoice) {
	fmt.Printf("send %s to %s via Post \n", iv.Title, f.to)
}

