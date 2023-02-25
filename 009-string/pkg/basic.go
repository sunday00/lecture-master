package pkg

import (
	"fmt"
	"reflect"
	"strings"
	"unicode/utf8"
	"unsafe"
)

func (p Pkg) MultiLine() {
	poet := `죽는 날까지 하늘을 우러러 한점 부끄럼이 없기를...
잎새에 이는 바람에도 나는 괴로워했다.`
	println(poet)

	// ref: utf-8, utf-16
	// utf8은 1~4byte, utf16은 유니코드 외의 모든 문자에 2byte 공간을 할당한다.

	// 이 체계를 아예 모르면 utf8은 1, utf16은 그 두배의 메모리를 차지하는 것 처럼 보이지만, 실제로는 utf-8이 더 많은 공간을 차지할 수도 있다.

	// 그러나 더 심화로 들어가면, utf-8이 평균적으로 더 효율이 좋다.
	// utf8는 영,숫자 등 초기 ascii2 에서 이식된 문자열은 1byte, 그 외에 중간정도의 사용빈도 글자 독어, 그리스어 등은 2byte,
	// 나머지 사용빈도가 특정 국가에 한정된 한글, 일어, 한자 등은 3byte, unicode 4byte 를 가변적으로 부여하므로,

	// 영미권에서는 압도적으로 utf-8이 유리하다.
	// 논쟁의 여지는 있으나, 한글, 일어권의 국가에서는 통상적으로 한글이 줄어드는만큼 영숫자가 두배가 되고, 인코딩 된 후 압축된 형태로 통신하는데다,
	// 인터넷의 개선으로 이미지, 비디오, 오디오에 비하면 텍스트는 너무 하찮은 크기라서,
	// utf-16으로 바꾸나 그 반대나 별 차이는 없으므로 걍 default 표준 8 로 쓰는 경우가 많다고 한다.

	str := "hello 월드"
	for _, v := range str {
		fmt.Printf("type: %T, ascii: %d, char:%c \n", v, v, v) // this...
	}

	for i := 0; i < len(str); i++ {
		fmt.Printf("type: %T, ascii: %d, char:%c \n", str[i], str[i], str[i]) // ...and this are different.
	}

	fmt.Println(len(str), utf8.RuneCountInString(str), string([]rune(str)[6]), string([]rune(str)[7]))

	// range str can show 1letter by letter,
	// normal for statements show 1byte by byte.
}

func (p Pkg) Compare() {
	a := "hello"
	b := "hello"

	fmt.Println(a == b) // not need to use equalTo( ) like java. Go compares string by ascii code
}

// go의 string size allocate
// go는 string 변수를 할당할때, 값이 아닌 특수한 내부 포인터로만 작동한다.
// 때문에 다른 문자열을 할당하면 실제 문자열의 길이는 변해도 포인터만 바꾸면 되므로,
// 다른 int8 과 int16 처럼 호환이 자유자재로 안되는 것이 아니라,
// 새 값을 할당 받을 포인터만 바꾸는 방식으로 동작한다.

func (p Pkg) StringHeader() {
	a := "hello 월드"
	b := a

	//println((*reflect.StringHeader)(unsafe.Pointer(&a)))
	//println((*reflect.StringHeader)(unsafe.Pointer(&b)))

	//b = "see you~"

	//println((*reflect.StringHeader)(unsafe.Pointer(&a)))
	//println((*reflect.StringHeader)(unsafe.Pointer(&b)))
	//
	//println(a, b, a == b, &a, &b)

	h1 := (*reflect.StringHeader)(unsafe.Pointer(&a))
	h2 := (*reflect.StringHeader)(unsafe.Pointer(&b))

	println(h1, h2)

	// not same as YouTube lecture... this pointer different!! I don't know why...;
}

func (p Pkg) Replace() {
	a := "hello"
	b := []byte(a)

	b[2] = 'k'

	fmt.Println(a, string(b))
}

func (p Pkg) UpperCase() {
	var c rune
	var s string

	_, _ = fmt.Scanln(&s)

	c = ([]rune(s))[0]

	if c >= 'a' && c <= 'z' {
		c = 'A' + (c - 'a')
	}

	println(string(c))

	var strings string
	var uppers string

	_, _ = fmt.Scanln(&strings)

	for _, cc := range strings {
		if cc >= 'a' && cc <= 'z' {
			uppers += string('A' + (cc - 'a'))
		} else {
			uppers += string(cc)
		}
	}

	println(uppers)
}

func (p Pkg) StringBuilder() {
	var strs string
	var builder = strings.Builder{}

	_, _ = fmt.Scanln(&strs)

	for _, cc := range strs {
		if cc >= 'a' && cc <= 'z' {
			_, _ = builder.WriteRune('A' + (cc - 'a'))
		} else {
			_, _ = builder.WriteRune(cc)
		}
	}

	println(builder.String())

	// builder 를 사용하면 그냥 + 를 사용하는 것보다, 새 문자열을 생성하지 않으므로 훨씬 메모리를 절약한다.
	// 특히 지금 예제처럼 매 rune을 길게 합치는 연산은, 글자수 만큼 + 할때마다 새 문자열을 일단 만들므로,
	// 여러 글자를 loop로 이을때에는 꼭 이 빌더를 쓰자...
}

func (p Pkg) template() {

}
