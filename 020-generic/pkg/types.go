package pkg

type Node[T any] struct {
	val  T
	next *Node[T]
}

func NewNode[T any](v T) *Node[T] {
	return &Node[T]{val: v}
}

func (n *Node[T]) Push(v T) *Node[T] {
	node := NewNode(v)
	n.next = node
	return node
}

//func (n *Node[T]) Something[V any](ho V){
//
//} // this is not support yet. v1.19

func (p Pkg) Nodes() {
	node1 := NewNode(1)
	node1.Push(2).Push(3).Push(4)

	for node1 != nil {
		print(node1.val, " - ")
		node1 = node1.next
	}
}

func (p Pkg) template() {

}
