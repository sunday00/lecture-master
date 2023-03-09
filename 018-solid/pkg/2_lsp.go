package pkg

func (p Pkg) Lsp() {
	s := &SpeedOver{}

	AbstractPunish(s)
}

type Punisher interface {
	Punish()
}

type SpeedOver struct{}
type Drunken struct{}

func (s *SpeedOver) Punish() {
	println("이놈.... 속도위반이라니...")
}

func (d *Drunken) Punish() {
	println("이놈.... 음주라니...")
}

func AbstractPunish(p Punisher) {
	if s, ok := p.(*SpeedOver); ok {
		s.Punish()
	}

	// 이렇게 추상 상위 구조를 받아 하위 매서드를 실행하는 것을 매직메서드, 다이나믹 캐스팅 이라고 하는데,
	// 되도록 하지 말자.
	// 하위에서 어떻게 동작할지가 상위에서는 예측하기 어렵게 만들기 때문.
	// 대표적인 Lsp 리스코프 치환 원칙 위배 사례가 된다.

	// 다만, 대규모 프레임워크를 만들때는 종종 이용되다는 함정...
}
