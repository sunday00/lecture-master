package tree

import (
	"fmt"
	"strconv"

	collection "../helpers"
)

type TreeNode struct {
	Val      int
	Children []*TreeNode
}

type Tree struct {
	Root *TreeNode
}

type function func(...interface{}) (int, error)

func (t *Tree) AddNode(n int) {
	if t.Root == nil {
		t.Root = &TreeNode{Val: n}
	} else {
		t.Root.Children = append(t.Root.Children, &TreeNode{Val: n})
	}
}

func (n *TreeNode) AddChild(ns []int) {
	for i := 0; i < len(ns); i++ {
		c := &TreeNode{Val: ns[i]}
		n.Children = append(n.Children, c)
	}
}

func (n *TreeNode) GetChilenToSting(includeSelf bool, all bool) string {
	var s string

	if includeSelf {
		s = strconv.Itoa(n.Val) + "\n"
	}

	if n.Children != nil {
		return s + getChilenToSting(n, 0, all)
	}
	return "no child"
}

func getChilenToSting(n *TreeNode, depth int, all bool) string {
	s := ""
	if n.Children != nil {
		tab := ""
		for i := 0; i < depth; i++ {
			tab += " "
		}

		for i := 0; i < len(n.Children); i++ {
			s += fmt.Sprintf("%s%s %d\n", tab, "└", n.Children[i].Val)
			if all {
				s += getChilenToSting(n.Children[i], depth+2, true)
			}

		}
	}
	return s
}

func (n *TreeNode) Dfs1(action function) {
	action(n.Val)
	n.dfs1(action)
}

func (n *TreeNode) dfs1(action function) {
	for i := 0; i < len(n.Children); i++ {
		action(n.Children[i].Val)
		n.Children[i].dfs1(action)
	}
}

func (n *TreeNode) Dfs2(action function) {
	action(n.Val)

	C := collection.Collect(n.Children)

	fmt.Println(C.ToSlice())

}
