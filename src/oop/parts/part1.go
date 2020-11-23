package parts

import (
	"fmt"

	"github.com/sunday00/go-console"
)

type Bread struct {
	ingredient string
	jam        string
}

type Jam struct {
	ingredient string
	open       bool
}

type Spoon struct {
	current string
}

type Sandwich struct {
	breads []Bread
}

func getBreads(ingredients ...string) []Bread {
	breads := make([]Bread, 2)
	breads[0].ingredient = ingredients[0]
	if len(ingredients) > 1 {
		breads[1].ingredient = ingredients[1]
	} else {
		breads[1].ingredient = ingredients[0]
	}

	return breads
}

func openJam(ingredient string) Jam {
	j := Jam{ingredient, true}
	return j
}

func getJam(spoon *Spoon, jam *Jam) {
	spoon.current = jam.ingredient
}

func putJamOnBread(bread *Bread, spoon *Spoon) {
	bread.jam = spoon.current
}

func coverBread(breads []Bread) Sandwich {
	sandwich := Sandwich{}
	sandwich.breads = breads
	return sandwich
}

func (s *Sandwich) print() {
	fmt.Println()
	console.PrintColoredLn(s.breads[0].ingredient, console.Warning)
	console.PrintColoredLn(s.breads[0].jam, console.Danger)
	console.PrintColoredLn("vegetable", console.Success)
	console.PrintColoredLn(s.breads[1].ingredient, console.Warning)
	fmt.Println()
}

// Part1 ...
func Part1() {
	console.PrintColoredRainbow("Hello sandwich")

	spoon := &Spoon{}

	breads := getBreads("rye", "garlic")
	jam := openJam("strawberry")
	getJam(spoon, &jam)
	putJamOnBread(&breads[0], spoon)

	sandwich := coverBread(breads)

	sandwich.print()

}
