package pkg

import (
	"fmt"
	"unsafe"
)

type Student struct {
	Name  string
	Class int
	No    int
	Score float64
}

func (s Student) toString() string {
	return fmt.Sprintf("name:%s class:%d no:%d score:%f", s.Name, s.Class, s.No, s.Score)
}

func (p Pkg) Basic() {
	var student Student
	student.Name = "이강수"
	student.Class = 1
	student.No = 1
	student.Score = 3.4

	fmt.Printf(student.toString())

	var friend = Student{Name: "김친구", Score: 4.2}
	friend.Class = 2
	friend.No = 2

	fmt.Printf(friend.toString())
}

type Physics struct {
	BaseInfo Student
	Category string
	Position string
}

func (p Pkg) NestedStruct() {
	beakho := Physics{
		BaseInfo: Student{Name: "강백호", Class: 1, No: 2, Score: 3.2},
		Category: "basketball",
		Position: "forward",
	}

	fmt.Println(beakho.BaseInfo.toString() + " " + beakho.Category)
}

type ArtClass struct {
	Student
	Score    int8 // override
	Category string
	Position string
}

func (p Pkg) EmbeddedStruct() {
	suji := ArtClass{
		Student:  Student{Name: "suji"},
		Score:    3,
		Category: "piano",
		Position: "member",
	}

	suji.Class = 2

	fmt.Println(suji.toString()+" "+suji.Category, suji.Score)
	// override field printed primary, but parent field still can use like super::Score.
	// eg: suji.User.Score
}

func (p Pkg) DeeplyCopy() {
	var stu1 = Student{Name: "Kim", Score: 1}
	var stu2 = stu1

	stu2.Name = "Lee"

	println(stu1.Name, stu2.Name) // go lang copy is not just ref copy. default copy is Deeply Value copy.

	var stu3 = &stu1
	stu3.Name = "Hong"

	println(stu1.Name, stu2.Name, stu3.Name) // & ampersand can change original value. this copy is ref copy.
}

func (p Pkg) Size() {
	var student Student
	student.Name = "이강수"
	student.Class = 1
	student.No = 1
	student.Score = 3.4

	println(unsafe.Sizeof(student))
	// 실제로 go 에서는 비트 단위로 값을 저장하므로,
	// 4, 8, 16, 32, 2... 이렇게 각 필드가 메모리를 먹더라도,
	// 8, 8, 16, 32, 8 ... 이렇게 메모리를 차지한다.
	// 이는 값에 access가 발생할때, 메모리를 탐색하는 포인터가 빠르게 찾기 위해 메모리 padding이 적용되기 때문이다.

	type SomeIntsA struct {
		Field1 int
		Field2 int8
		Field3 int
		Field4 int8
	}

	type SomeIntsB struct {
		Field1 int
		Field3 int
		Field2 int8
		Field4 int8
	}

	someIntsA := SomeIntsA{1, 2, 3, 4}
	someIntsB := SomeIntsB{1, 2, 3, 4}

	println(unsafe.Sizeof(someIntsA), unsafe.Sizeof(someIntsB)) // Size a is bigger then b
	// less than 8byte fields gather themselves, so, you should declare them this points, when project's memory size important
}

func (p Pkg) UsingNewKeyword() {
	mike := new(Student)
	mike.Name = "Mike"

	println(mike.toString())
}

func (p Pkg) template() {

}
