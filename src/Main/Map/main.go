package main

import (
	"fmt"

	mymap "../../map"
)

func main() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	m := mymap.Map{}
	m.Add("HO", "1")
	m.Add("HOO", "2")
	m.Add("HING", "3")

	fmt.Println(m.Get("HO"))
	fmt.Println(m.Get("HOO"))
	fmt.Println(m.Get("HING"))
	fmt.Println(m.Get("HUNG"))
	fmt.Println(m.Get("HO"))
	fmt.Println(m.Get("HOO"))
	fmt.Println(m.Get("HING"))

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}
