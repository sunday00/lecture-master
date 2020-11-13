package heap

import "fmt"

// Heap ..
type Heap struct {
	list []int
}

//Push ..
func (h *Heap) Push(v int) {
	h.list = append(h.list, v)
	idx := len(h.list) - 1
	for idx >= 0 {
		parentIdx := (idx - 1) / 2
		if parentIdx < 0 {
			break
		}
		if h.list[idx] > h.list[parentIdx] {
			h.list[idx], h.list[parentIdx] = h.list[parentIdx], h.list[idx]
			idx = parentIdx
		} else {
			break
		}
	}
}

//Print ..
func (h *Heap) Print() {
	fmt.Println(h.list)
}
