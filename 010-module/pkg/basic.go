package pkg

import (
	"github.com/guptarohit/asciigraph"
	"github.com/sunday00/go-console"
	random "math/rand"
	"pkg/pkg/inner"
	_ "strings"
)

func (p Pkg) Basic() {
	println(random.Int())

	inner.PrintCustom()

	console.PrintColoredRainbow("hello")

	data := []float64{3, 4, 4, 5, 5, 6, 7, 3, 10, 8, 5, 4, 5, 5, 2, 6}
	graph := asciigraph.Plot(data)

	println(graph)

	printD()
}

func (p Pkg) template() {

}
