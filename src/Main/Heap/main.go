package main

import (
	"fmt"

	heap "../../heap"
)

func main() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	H := &heap.Heap{}

	H.Push(7)
	H.Push(4)
	H.Push(6)
	H.Push(9)
	H.Push(8)
	H.Push(2)
	H.Push(3)
	H.Push(4)
	H.Push(1)
	H.Push(2)
	H.Push(5)
	H.Push(0)

	H.Print()

	println(H.Unshift())
	println(H.Unshift())
	println(H.Unshift())

	H.Print()

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	target := []int{4, 5, -1, -1, 3, 2, 6}

	println(findNthTop(target, 3))

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}

func findNthTop(sl []int, nth int) int {
	heap := []int{}

	for i := 0; i < len(sl); i++ {

		heap = append(heap, sl[i])

		if len(heap) < 2 {
			continue
		}

		idx := len(heap) - 1
		for idx >= 0 {
			parentIdx := (idx - 1) / 2
			if heap[parentIdx] > heap[idx] {
				heap[parentIdx], heap[idx] = heap[idx], heap[parentIdx]
				idx = parentIdx
			} else {
				break
			}
		}

		if len(heap) > nth {
			heap = heap[1:]
			idx := len(heap) - 1
			for idx >= 0 {
				parentIdx := (idx - 1) / 2
				if heap[parentIdx] > heap[idx] {
					heap[parentIdx], heap[idx] = heap[idx], heap[parentIdx]
					idx = parentIdx
				} else {
					break
				}
			}
		}

	}
	return heap[0]

}
