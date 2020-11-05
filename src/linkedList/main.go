package main

import "fmt"

type Node struct {
	next *Node
	val  int
}

func main() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	root := &Node{val: 0}
	root.AddNode()
	root.AddNode()
	root.AddNode()
	root.AddNode()
	root.AddNode()

	root.toStringAll()

	node := root.getLastNode()
	node = node.addNodeToLast()

	root.toStringAll()

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	root.removeNode(0)
	root.toStringAll()

	shifted := root.shift()
	root.toStringAll()
	print(shifted)

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}

// AddNode is append to new node
func (n *Node) AddNode() {
	var tail *Node
	tail = n
	for tail.next != nil {
		tail = tail.next
	}

	node := &Node{val: tail.val + 1}
	tail.next = node
}

func (n *Node) toStringAll() {
	var node *Node
	node = n
	fmt.Printf("\naddr : %p, ", n)
	fmt.Printf("Node : {next:%p, val:%d}\n", node.next, node.val)
	for node.next != nil {
		node = node.next

		fmt.Printf("addr : %p, ", node)
		if node.next == nil {
			fmt.Printf("Node : {next:nil, val:%d}\n", node.val)
		} else {
			fmt.Printf("Node : {next:%p, val:%d}\n", node.next, node.val)
		}
	}
}

func (n *Node) getLastNode() *Node {
	var tail *Node
	tail = n
	for tail.next != nil {
		tail = tail.next
	}
	return tail
}

func (n *Node) addNodeToLast() *Node {
	node := &Node{nil, n.val + 1}
	n.next = node
	return node
}

func (n *Node) removeNode(val int) {
	var prev *Node

	if n.val == val {
		*n = *n.next
		return
	}

	prev = n

	for true {
		if prev.next.val == val {
			break
		}
		prev = prev.next
	}

	prev.next = prev.next.next
}

func (n *Node) shift() *Node {
	m := n
	n.removeNode(n.val)
	return m
}
