package main

import (
	"fmt"

	tree "../../tree"
)

func main() {
	print("\033[H\033[2J")
	fmt.Print("\033[33m============= start go app =============\n\n\033[0m")

	t := tree.Tree{}
	t.AddNode(1)

	cs := []int{2, 3, 4}
	cs2 := []int{5, 6, 7}
	cs3 := []int{8, 9}
	cs4 := []int{10, 11, 12, 13}

	t.Root.AddChild(cs)
	t.Root.Children[0].AddChild(cs2)
	six := t.Root.Children[0].Children[1]
	six.AddChild(cs3)
	seven := t.Root.Children[0].Children[2]
	seven.AddChild(cs4)
	seven.Children[1].AddChild([]int{14, 15})
	t.Root.Children[1].AddChild([]int{16, 17})
	t.Root.Children[1].Children[1].AddChild([]int{18, 19, 20, 21})
	t.Root.Children[1].Children[1].Children[2].AddChild([]int{22, 23})
	t.Root.Children[1].Children[1].Children[2].Children[0].AddChild([]int{24})
	fmt.Println(t.Root.GetChilenToSting(true, true))

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	seven.Dfs1(fmt.Println)

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	seven.Dfs2(fmt.Println)

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	seven.Bfs(fmt.Println)

	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")
	fmt.Print("\033[34m\n============= middle go app =============\n\n\033[0m")

	bt := tree.BTree{}
	bt.Root = &tree.BTreeNode{Val: 5}
	bt.Root.AddNode(3)
	bt.Root.AddNode(7)
	bt.Root.AddNode(2)
	bt.Root.AddNode(4)
	bt.Root.AddNode(6)
	bt.Root.AddNode(8)
	bt.Root.AddNode(9)
	bt.Root.AddNode(1)

	bt.Root.GetChildrenToSting(true, true)

	fmt.Print("\033[33m\n\n============== terminated ==============\n\n\033[0m")

}
