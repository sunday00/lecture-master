package pkg

import (
	"fmt"
	"github.com/sunday00/go-console"
	"sync"
	"time"
)

func (p Pkg) Basic() {
	go PrintKorean()
	go PrintNumber()

	time.Sleep(3 * time.Second)

	// go 명령어는 서브 루틴을 만드는 것으로
	// 메인 루틴이 끝나버리면 서브루틴을 기다리지 않고 종료해 버린다.
}

func PrintKorean() {
	str := []rune{'가', '나', '다', '마', '바', '사'}
	for _, k := range str {
		time.Sleep(300 * time.Millisecond)
		fmt.Printf("%c ", k)
	}
}

func PrintNumber() {
	for i := range [5]int{} {
		time.Sleep(400 * time.Millisecond)
		fmt.Printf("%d ", i)
	}
}

var wg sync.WaitGroup

func (p Pkg) Synchronize() {
	wg.Add(10)
	for i := 0; i < 10; i++ {
		go sumAtoB(i, 100000)
	}

	wg.Wait()
}

func sumAtoB(a, b int) {
	sum := 0
	for i := a; i < b; i++ {
		sum += 1
	}
	console.PrintColoredF("sum: %d \n", console.Info, sum)
	wg.Done()
}

func (p Pkg) template() {

}
