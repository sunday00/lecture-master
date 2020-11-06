package processlist

import "fmt"

// SliceStack first in last out process using Slice
type SliceStack struct {
	body []interface{}
}

type function func(...interface{}) (int, error)

// Push ..
func (S *SliceStack) Push(args interface{}) {
	S.body = append(S.body, args)
}

// Println ..
func (S *SliceStack) Println() {
	fmt.Println(S.body)
}

// DoLoop ..
func (S *SliceStack) DoLoop(met function) {

	for i := len(S.body) - 1; i >= 0; i-- {
		met(S.body[i])
	}

}

// Get ..
func (S *SliceStack) Get() interface{} {

	if len(S.body) == 0 {
		return nil
	}

	last := S.body[len(S.body)-1]
	S.body = S.body[:len(S.body)-1]
	return last
}
