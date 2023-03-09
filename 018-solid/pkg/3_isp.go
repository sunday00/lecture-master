package pkg

func (p Pkg) Isp() {
	s := Salmon{}

	namingAnimal(s, "Koko")
}

//type Animal interface {
//	Walk()
//	Swim()
//	Eat()
//	Digest()
//}
//
//type Lion struct{}
//
//func (l Lion) Walk()   {}
//func (l Lion) Swim()   {} // <- not need
//func (l Lion) Eat()    {}
//func (l Lion) Digest() {}
//
//
//type Salmon struct{}
//
//func (d Salmon) Walk()   {} // <- not need
//func (d Salmon) Swim()   {}
//func (d Salmon) Eat()    {}
//func (d Salmon) Digest() {}

//func NamingAnimal(a Animal) {}

type Animal interface {
	Eat()
	Digest()
}

type GroundAnimal interface {
	Walk()
	/**/ //Swim()
	Animal
}

type WaterAnimal interface {
	/**/ //Walk()
	Swim()
	Animal
}

type Lion struct{}

func (l Lion) Walk()   {}
func (l Lion) Eat()    {}
func (l Lion) Digest() {}

type Salmon struct{}

func (d Salmon) Swim()   {}
func (d Salmon) Eat()    {}
func (d Salmon) Digest() {}

func namingAnimal(a Animal, name string) {}
