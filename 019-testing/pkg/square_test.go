package pkg

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestSquare(t *testing.T) {
	result := square(9)
	if result != 81 {
		t.Errorf("eee")
	}
}

//func TestSquare2(t *testing.T) {
//	result := square(9)
//	if result != 81 {
//		t.Errorf("eee")
//	}
//}

func TestSquare3(t *testing.T) {
	//assert.Equal(t, 82, square(9), "oops...")
	assert.Equal(t, 81, square(9), "oops...")
}

func BenchmarkFibonacci(t *testing.B) {
	for i := 0; i < t.N; i++ {
		fibonacci(40)
	}
}

func BenchmarkFibonacci12(t *testing.B) {
	for i := 0; i < t.N; i++ {
		fibonacci(40)
	}
}

func BenchmarkFibonacci2(t *testing.B) {
	for i := 0; i < t.N; i++ {
		fibonacci(40)
	}
}
