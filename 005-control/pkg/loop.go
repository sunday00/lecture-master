package pkg

import (
	"bufio"
	"fmt"
	"os"
)

func (p Pkg) ForState() {
	for i := 0; i < 10; i++ {
		println(i)
	}

	i := 0
	for ; i < 10; i++ {
		println(i)
	}

	println(i)

	j := 0
	for j < 10 {
		println(j)
		j++
	}

	k := 0
	for k < 10 { //this is same as while state on other language
		k++
		println(k)
	}
}

func (p Pkg) Infinity() {
	scanner := bufio.NewReader(os.Stdin)

	var a int

	for { // infinity doesn't need for true { ... }
		_, err := fmt.Scanln(&a)
		if err != nil {
			_, _ = scanner.ReadString('\n') // clear buffer
			println(err)
		}

		if a < 10 {
			break
		}

		println(a)
	}
}

func (p Pkg) Diamond() {
	scanner := bufio.NewReader(os.Stdin)

	var a int
	var b = " "

	for {
		_, err := fmt.Scanln(&a, &b)

		if err != nil {
			if err.Error() != "unexpected newline" || a == 0 {
				println("parse int  failed. please input correctly")
				_, _ = scanner.ReadString('\n')
				continue
			}
		}

		if a < 3 {
			fmt.Println("Please input number bigger then 3")
			_, _ = scanner.ReadString('\n')
			continue
		}

		if a%2 == 0 {
			fmt.Println("Please input odd number")
			_, _ = scanner.ReadString('\n')
			continue
		}

		break
	}

	// | 000*000 |
	// | 00***00 |
	// | 0*****0 |
	// | ******* |
	// | 0*****0 |
	// | 00***00 |
	// | 000*000 |

	print("\n")

	starCnt := 1
	for i := 1; i <= a; i++ {
		for pre := 0; pre < (a-starCnt)/2; pre++ {
			print(b)
		}

		for m := 0; m < starCnt; m++ {
			print("*")
		}

		for pre := 0; pre < (a-starCnt)/2; pre++ {
			print(b)
		}

		print("\n")

		if i <= (a-1)/2 {
			starCnt += 2
		} else if i > (a-1)/2 {
			starCnt -= 2
		}
	}
}

func (p Pkg) Labeled() {
outer:
	for i := 2; i < 10; i++ {
		for j := 2; j < 10; j++ {
			if j*i > 30 {
				break outer
			}
			println(i * j)
		}
	}
}

func (p Pkg) ttemplate() {

}
