package pkg

import (
	"context"
	"fmt"
	"sync"
	"time"
)

var pubsubWg sync.WaitGroup

func (p Pkg) PubSub() {
	ctx, cancel := context.WithCancel(context.Background())

	pubsubWg.Add(4)

	publisher := NewPub(ctx)
	subscriber1 := NewSub("SUB-A", ctx)
	subscriber2 := NewSub("SUB-B", ctx)

	go publisher.Update()

	subscriber1.Subscribe(publisher)
	subscriber2.Subscribe(publisher)

	go subscriber1.Update()
	go subscriber2.Update()

	go func() {
		tick := time.Tick(time.Second * 2)
		for {
			select {
			case <-tick:
				publisher.Publish("Hello Pubsub")
			case <-ctx.Done():
				pubsubWg.Done()
				return
			}
		}
	}()

	_, _ = fmt.Scanln()
	cancel()

	pubsubWg.Wait()
}

type Publisher struct {
	ctx   context.Context
	subCh chan chan<- string // write only chan
	pubCh chan string
	subs  []chan<- string
}

func NewPub(ctx context.Context) *Publisher {
	return &Publisher{
		ctx:   ctx,
		subCh: make(chan chan<- string),
		pubCh: make(chan string),
		subs:  make([]chan<- string, 0),
	}
}

func (p *Publisher) Subscribe(sub chan<- string) {
	p.subCh <- sub
}

func (p *Publisher) Publish(msg string) {
	p.pubCh <- msg
}

func (p *Publisher) Update() {
	for {
		select {
		case sub := <-p.subCh:
			p.subs = append(p.subs, sub)
		case msg := <-p.pubCh:
			for _, subscriber := range p.subs {
				subscriber <- msg
			}
		case <-p.ctx.Done():
			pubsubWg.Done()
			return
		}
	}
}

type Subscriber struct {
	ctx   context.Context
	name  string
	msgCh chan string
}

func NewSub(name string, ctx context.Context) *Subscriber {
	return &Subscriber{
		ctx:   ctx,
		name:  name,
		msgCh: make(chan string),
	}
}

func (s *Subscriber) Subscribe(pub *Publisher) {
	pub.Subscribe(s.msgCh)
}

func (s *Subscriber) Update() {
	for {
		select {
		case msg := <-s.msgCh:
			fmt.Printf("%s got msg:%s \n", s.name, msg)
		case <-s.ctx.Done():
			pubsubWg.Done()
			return
		}
	}
}
