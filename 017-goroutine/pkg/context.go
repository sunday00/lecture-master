package pkg

import (
	"context"
	"fmt"
	"sync"
	"time"
)

var globalWg sync.WaitGroup

func (p Pkg) Cancelable() {
	globalWg.Add(1)

	ctx, cancel := context.WithCancel(context.Background())

	go printEverySecond(ctx)

	time.Sleep(10 * time.Second)
	cancel()

	globalWg.Wait()
}

func (p Pkg) Limitable() {
	globalWg.Add(1)

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)

	go printEverySecond(ctx)

	globalWg.Wait()

	cancel()
}

func printEverySecond(ctx context.Context) {
	tick := time.Tick(time.Second)

	for {
		select {
		case <-ctx.Done():
			globalWg.Done()
			return
		case <-tick:
			println("tick")
		}
	}
}

func (p Pkg) Valuable() {
	globalWg.Add(1)

	ctx := context.WithValue(context.Background(), "number", 99)

	go printValueEverySecond(ctx)

	time.Sleep(10 * time.Second)
	globalWg.Done()

	globalWg.Wait()
}

func printValueEverySecond(ctx context.Context) {
	tick := time.Tick(time.Second)

	for {
		select {
		case <-ctx.Done():
			globalWg.Done()
			return
		case <-tick:
			if v := ctx.Value("number"); v != nil {
				fmt.Printf("%v \n", v)
			}

			if v := ctx.Value("number2"); v != nil {
				fmt.Printf("%v \n", v)
			}
		}
	}
}

func (p Pkg) NestedContext() {
	globalWg.Add(1)

	ctx, cancel := context.WithCancel(context.Background())
	ctx = context.WithValue(ctx, "number", 99)
	ctx = context.WithValue(ctx, "number2", 88)

	go printValueEverySecond(ctx)

	time.Sleep(10 * time.Second)
	cancel()

	globalWg.Wait()
}

func (p Pkg) sample() {

}
