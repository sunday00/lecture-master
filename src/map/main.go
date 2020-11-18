package mymap

import (
	// helpers "../../src/helpers"
	"github.com/sunday00/go-console"
)

type Map struct {
	list [3571][]Item
}

type Item struct {
	key   string
	value string
}

func KeyIsNotExists() {
	defer func() {
		if err := recover(); err != nil {
			// fmt.Printf("\033[38;5;166m%s\033[0m\n", err)
			console.PrintColoredLn(err, console.Panic)
			console.PrintColoredLn("Check the key is exists", console.Info)
		}
	}()

	panic("PANIC : Value is not exists related the Key")
}

func hash(s string) int {

	h := 0
	A := 256
	B := 3571

	for i := 0; i < len(s); i++ {
		h = (h*A + int(s[i])) % B
	}

	return h
}

func (m *Map) Add(key, value string) {
	h := hash(key)
	m.list[h] = append(m.list[h], Item{key, value})
}

func (m *Map) Get(key string) string {
	h := hash(key)
	for i := 0; i < len(m.list[h]); i++ {
		if m.list[h][i].key == key {
			return m.list[h][i].value
		}
	}

	KeyIsNotExists()

	return "Value is not exists related the Key"
}
