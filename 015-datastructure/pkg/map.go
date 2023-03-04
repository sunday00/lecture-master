package pkg

func (p Pkg) Basic() {
	m := make(map[string]Racer)

	m["hayato"] = Racer{"hayato", "sugo"}
	m["kaga"] = Racer{"kaga", "aoi"}
	m["randol"] = Racer{"randol", "unionSavior"}

	for k, v := range m {
		println(k, v.Name, v.Team)
	}

	println("=========")

	if randol, ok := m["randol"]; ok {
		println(randol.Name)
	}

	delete(m, "randol")

	if randol, ok := m["randol"]; ok {
		println(randol.Name)
	}

	println("=========")

	for k, v := range m {
		println(k, v.Name, v.Team)
	}
}

func (p Pkg) HashFunc() {
	const i = 10
	hash := Hash{Mod: i}
	//m := make([]string, hash.Mod)
	m := [i]string{}

	m[hash.make(100)] = "o"
	m[hash.make(200)] = "p" // 200 % 10 = 0 -> overwrite o
	m[hash.make(105)] = "q"
	m[hash.make(205)] = "r" // 205 % 10 = 5 -> overwrite q

	println(
		m[hash.make(100)],
		m[hash.make(200)],
		m[hash.make(105)],
		m[hash.make(205)],
	)

	n := make(map[[2]int]string)
	n[hash.make2(100)] = "a"
	n[hash.make2(200)] = "b"
	n[hash.make2(105)] = "c"
	n[hash.make2(205)] = "d"

	println(
		n[hash.make2(100)],
		n[hash.make2(200)],
		n[hash.make2(105)],
		n[hash.make2(205)],
	)
}

type Hash struct {
	Mod int
}

func (h Hash) make(d int) int {
	return d % h.Mod
}

func (h Hash) make2(d int) [2]int {
	return [2]int{d % h.Mod, d}
}
