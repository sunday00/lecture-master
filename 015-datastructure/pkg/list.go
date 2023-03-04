package pkg

import (
	"container/list"
	"container/ring"
)

type Racer struct {
	Name string
	Team string
}

func (p Pkg) ListData() {
	racers := list.New()

	r1 := Racer{"Hayato", "Sugo"}
	r2 := Racer{"Randole", "UnionSavior"}
	r3 := Racer{"Kaga", "Aoi"}
	r4 := Racer{"Shinjo", "Aoi"}

	racers.PushFront(r1)      // 제일 앞에 === unshift
	e3 := racers.PushBack(r3) // 제일 뒤에 === push

	racers.InsertBefore(r2, e3) // r2를 e3 앞에
	racers.InsertAfter(r4, e3)  // r2를 e4 뒤에

	for r := racers.Front(); r != nil; r = r.Next() {
		// 제일 앞에 요소 ; nil 아나면 ; 다음 요소
		println(r.Value.(Racer).Name)
	}

	for r := racers.Back(); r != nil; r = r.Prev() {
		println(r.Value.(Racer).Team)
	}
}

type LineData interface {
	Push(val interface{})
	Pop() interface{}
}

type Queue struct {
	v *list.List
}

type Stack struct {
	v *list.List
}

func (s Stack) Push(val interface{}) {
	s.v.PushBack(val)
}

func (q Queue) Push(val interface{}) {
	q.v.PushBack(val)
}

func (q Queue) Pop() interface{} {
	front := q.v.Front()
	if front != nil {
		return q.v.Remove(front)
	}
	return nil
}

func (s Stack) Pop() interface{} {
	back := s.v.Back()
	if back != nil {
		return s.v.Remove(back)
	}
	return nil
}

func NewQueue() *Queue {
	return &Queue{list.New()}
}

func NewStack() *Stack {
	return &Stack{list.New()}
}

func (p Pkg) QueAndStack() {
	queue := NewQueue()

	queue.Push(1)
	queue.Push(2)
	queue.Push(3)

	for v := queue.Pop(); v != nil; v = queue.Pop() {
		println(v.(int))
	}

	println("=========")

	stack := NewStack()

	stack.Push(1)
	stack.Push(2)
	stack.Push(3)

	for v := stack.Pop(); v != nil; v = stack.Pop() {
		println(v.(int))
	}

	// stack 은 리스트든 배열이든 무관하게 일반적으로 만들지만,
	// queue 는 대체로 리스트로 만든다.
	// 많은 양의 데이터가 있는경우, 배열은 0번지에 항상 첫 요소를 넣기 위해,
	// 앞의 요소를 pop 하면 뒷자리를 당겨오는 과정을 거치기 때문에 big-O 에서 O(n) 이 발생학기 때문
	// 반대로 넣을때 앞에서 넣고, 뒤에서 pop 하는 구조로 만들어도,
	// 역시 넣을 때 앞자리에서 밀어야 하기 때문에, 이때는 push 에서 O(n)이 발생한다.
	// 때문에 대량의 선형 구조에서는 list 를 이용하여 queue 를 만든다.

	// 다만 요소의 수가 아주 작은 경우 (대략 1000 미만)의 경우에는
	// 메모리가 로드 하는 과정에서 인접 메모리 캐싱이 되므로,
	// 적은 요소에는 오히려 배열이 빠를 수도 있다.

	// 정리
	// 1000 개 미만에는 queue 든 stack 이든 배열이 유리
	// 10000 개 정도 되는 양에서는 입출력이 많은 경우에 list 가 유리,
	// 특정 요소 탐색에는 배열이 유리
	// 선형 순차 처리에는
	// list 가 유리
	// stack 구조는 둘다 무관
}

func (p Pkg) RingData() {
	r := ring.New(5)

	for i := 0; i < r.Len(); i++ {
		r.Value = 'A' + i
		r = r.Next()
	}

	for i := 0; i < r.Len()*2; i++ {
		print(string(rune(r.Value.(int))))
		r = r.Next()
	}

	println("======")

	for i := 0; i < r.Len()*2; i++ {
		print(string(rune(r.Value.(int))))
		r = r.Prev()
	}
}

func (p Pkg) template() {

}
