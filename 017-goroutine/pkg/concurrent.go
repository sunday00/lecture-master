package pkg

import (
	"fmt"
	"sync"
	"time"
)

type Account struct {
	Balance int
}

func (p Pkg) Concurrent() {
	var wg sync.WaitGroup
	account := &Account{10}

	wg.Add(10)

	for i := 0; i < 10; i++ {
		go func() {
			for {
				DepositAndWithdraw(account)
			}
			wg.Done()
		}()
	}
	wg.Wait()
}

func DepositAndWithdraw(account *Account) {
	if account.Balance < 0 {
		panic(fmt.Sprintf("Balane empty."))
	}

	account.Balance += 1000

	time.Sleep(time.Millisecond)

	account.Balance -= 1000
}

func (p Pkg) UseLock() {

}

func (p Pkg) sample() {

}
