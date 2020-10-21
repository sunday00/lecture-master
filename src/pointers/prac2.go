package main

import "fmt"

// CheckRefInMethod for type referenc test
func CheckRefInMethod() {

	var l = lang{"php", 6, "interpret"}
	var f = frameWork{"laravel", 7, l}

	fmt.Println(f)

	f.modLangVer(7)

	fmt.Println(f)

	f.modLangVerRef(7)

	fmt.Println(f)
}

type frameWork struct {
	title     string
	recentVer int
	lang      lang
}

type lang struct {
	title     string
	recentVer int
	runType   string
}

func (f frameWork) modLangVer(ver int) {
	f.lang.recentVer = ver
}

func (f *frameWork) modLangVerRef(ver int) {
	f.lang.recentVer = ver
}
