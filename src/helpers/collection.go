package helpers

// Collection ..
type Collection struct {
	body []int
}

// Collect ..
func Collect(slice []int) Collection {
	C := Collection{}
	C.body = slice
	return C
}

// Push ..
func (a *Collection) Push(v int) {
	a.body = append(a.body, v)
}

// Pop ..
func (a *Collection) Pop() int {
	v := a.body[len(a.body)-1]
	a.body = a.body[:len(a.body)-2]
	return v
}

// ToSlice ..
func (a *Collection) ToSlice() []int {
	return a.body
}
