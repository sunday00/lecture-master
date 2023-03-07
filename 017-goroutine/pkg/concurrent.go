package pkg

import (
	"fmt"
	"github.com/sunday00/go-console"
	"math/rand"
	"sync"
	"time"
)

type Account struct {
	Balance int
}

var mutex sync.Mutex

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
	mutex.Lock()
	defer mutex.Unlock()

	if account.Balance < 0 {
		panic(fmt.Sprintf("Balane empty."))
	}

	account.Balance += 1000
	println(account.Balance)

	time.Sleep(time.Second)

	account.Balance -= 1000
	println(account.Balance)
}

type DiningTool struct {
	Name  string
	Mutex *sync.Mutex
}

func (p Pkg) DeadLock() {
	rand.Seed(time.Now().UnixNano())

	wg.Add(2)
	fork := DiningTool{"fork", &sync.Mutex{}}
	spoon := DiningTool{"spoon", &sync.Mutex{}}

	go dining("A", fork, spoon)
	//go dining("B", spoon, fork)
	go dining("B", fork, spoon)
	wg.Wait()
}

func dining(name string, first, second DiningTool) {
	for i := 0; i < 100; i++ {
		console.KeyValue(name, "trying to eat")

		first.Mutex.Lock()
		console.PrintColoredF("%s get %s \n", console.Info, name, first.Name)

		second.Mutex.Lock()
		console.PrintColoredF("%s get %s \n", console.Info, name, second.Name)

		console.PrintColoredF("%s eating \n", console.Success, name)
		time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)

		second.Mutex.Unlock()
		console.PrintColoredF("%s loose %s \n", console.Cute, name, second.Name)

		first.Mutex.Unlock()
		console.PrintColoredF("%s loose %s \n", console.Cute, name, first.Name)
	}
	wg.Done()
}

func (p Pkg) Divide() {
	var jobList [10]Job
	for i := 0; i < 10; i++ {
		jobList[i] = &SquareJob{i}
	}

	var wg sync.WaitGroup
	wg.Add(10)

	for i := 0; i < 10; i++ {
		job := jobList[i]
		go func() {
			job.Do()
			wg.Done()
		}()
	}

	wg.Wait()
}

type Job interface {
	Do()
}

type SquareJob struct {
	index int
}

func (j *SquareJob) Do() {
	console.PrintColoredF("%d job start \n", console.Info, j.index)
	time.Sleep(1 * time.Second)
	console.PrintColoredF("%d job complete. result : %d \n", console.Success, j.index, j.index*j.index)
}
