package main

import "fmt"

func main() {
	var arr [2]int
	arr[0] = 1
	arr[1] = 2
	fmt.Println(arr)

	arr2 := [2]int{3, 4}
	fmt.Println(arr2)

	arr3 := [2]int{}
	arr3[0] = 5
	arr3[1] = 6

	fmt.Println(arr3)

	fmt.Println(len(arr2))
	fmt.Println(len("sdfdagearf"))

	str1 := "hello 스트링"
	str2 := []rune("hello 룬 스트링")

	for i := 0; i < len(str1); i++ {
		fmt.Print(string(str1[i]))
		fmt.Print(string(str2[i]))
	}

}
