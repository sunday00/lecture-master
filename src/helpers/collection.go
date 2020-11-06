package helpers

// Collection ..
type Collection struct {
	body []interface{}
}

// Collect ..
func Collect(slice interface{}) Collection {
	C := Collection{}
	C.Push(slice)
	C.body = C.body[0]
	return C
}

// Push ..
func (a *Collection) Push(v interface{}) {
	a.body = append(a.body, v)
}

// Pop ..
func (a *Collection) Pop() interface{} {
	v := a.body[len(a.body)-1]
	a.body = a.body[:len(a.body)-2]
	return v
}

// ToSlice ..
func (a *Collection) ToSlice() []interface{} {
	return a.body
}
