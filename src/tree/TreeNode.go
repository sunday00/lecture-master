package tree

import (
	"fmt"
	"strconv"
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
	for _, v := range n.Children {
		action(v.Val)
		v.dfs1(action)
	}
}

func (n *TreeNode) Dfs2(action function) {
	stack := []*TreeNode{}
	stack = append(stack, n)

	for len(stack) > 0 {
		var lastInput *TreeNode
		lastInput, stack = stack[len(stack)-1], stack[:len(stack)-1]

		action(lastInput.Val)

		// for i, _ := range lastInput.Children {
		// 	stack = append(stack, v)
		// }

		for i := len(lastInput.Children) - 1; i >= 0; i-- {
			stack = append(stack, lastInput.Children[i])
		}
	}

}

func (n *TreeNode) Bfs(action function) {
	que := []*TreeNode{}
	que = append(que, n)

	for len(que) > 0 {
		var firstInput *TreeNode
		firstInput, que = que[0], que[1:]
		action(firstInput.Val)

		for _, v := range firstInput.Children {
			que = append(que, v)
		}
	}
}

type BTreeNode struct {
	Val   int
	left  *BTreeNode
	right *BTreeNode
}

type BTree struct {
	Root *BTreeNode
}

func (t *BTreeNode) AddNode(n int) {

	if n < t.Val {
		if t.left == nil {
			t.left = &BTreeNode{Val: n}
		} else {
			t.left.AddNode(n)
		}
	} else {
		if t.right == nil {
			t.right = &BTreeNode{Val: n}
		} else {
			t.right.AddNode(n)
		}
	}

}

// func (n *TreeNode) AddChild(ns []int) {
// 	for i := 0; i < len(ns); i++ {
// 		c := &TreeNode{Val: ns[i]}
// 		n.Children = append(n.Children, c)
// 	}
// }

func (n *BTreeNode) GetChildrenToSting(includeSelf bool, all bool) {
	s := fmt.Sprintf(strconv.Itoa(n.Val))
	ss := []string{s}

	var group [][]string
	group = append(group, ss)

	_, c := getChildrenToString(n, 1, group)

	for _, cc := range c {
		x := 94
		blank := ""
		for i := 0; i < x/2-(len(cc[0])*len(cc)/2); i++ {
			blank += " "
		}
		fmt.Print(blank)
		fmt.Println(cc)
	}

}

func getChildrenToString(n *BTreeNode, depth int, group [][]string) (string, [][]string) {

	if len(group) == depth {
		group = append(group, []string{})
	}

	left := -1
	right := -1

	if n.left != nil {
		left = n.left.Val
	}
	if n.right != nil {
		right = n.right.Val
	}

	if left == -1 && right == -1 {
		group[depth] = append(group[depth], strconv.Itoa(n.Val)+"[ -1 | -1 ]")
		return "", group
	}

	s := fmt.Sprintf("%d[ %d | %d ]", n.Val, left, right)
	group[depth] = append(group[depth], s)

	if n.left != nil {
		s, group = getChildrenToString(n.left, depth+1, group)
		// group = append(_group, _s)
	}

	if n.right != nil {
		s, group = getChildrenToString(n.right, depth+1, group)
		// group = append(_group, _s)
	}

	return s, group
}
