package main

import "fmt"

func main2() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	// var m map[string]string // variableName map[keyType]valueType
	m := make(map[string]string)
	m["apple"] = "iphone"
	m["cherry"] = "vega"
	fmt.Println(m["apple"])
	fmt.Println(m["banana"]) //string value -> default value is empty string
	fmt.Println(m["cherry"])

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	mm := make(map[string]int)
	mm["bar"] = 10
	mm["baz"] = 58
	fmt.Println(mm["bar"])
	fmt.Println(mm["foo"]) //int value -> default value is 0
	fmt.Println(mm["baz"])

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	mmm := make(map[string]int)
	mmm["batman"] = 11
	mmm["riddler"] = 12
	mmm["joker"] = 0

	mmm21, ok1 := mmm["batman"]
	mmm22, ok2 := mmm["riddler"]
	mmm23, ok3 := mmm["joker"]
	mmm24, ok4 := mmm["penguin"]

	fmt.Println(mmm21, ok1)
	fmt.Println(mmm22, ok2)
	fmt.Println(mmm23, ok3)
	fmt.Println(mmm24, ok4) // ok is check key exists

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	delete(mmm, "joker")

	mmm31, ok21 := mmm["batman"]
	mmm32, ok22 := mmm["riddler"]
	mmm33, ok23 := mmm["joker"]
	mmm34, ok24 := mmm["penguin"]

	fmt.Println(mmm31, ok21)
	fmt.Println(mmm32, ok22)
	fmt.Println(mmm33, ok23) // deleted key
	fmt.Println(mmm34, ok24)

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	for k, v := range mm {
		fmt.Println(k, v)
	}

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}
