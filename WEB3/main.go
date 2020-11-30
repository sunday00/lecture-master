package main

import (
	"github.com/sunday00/go-console"
	"github.com/tuckersGo/goWeb/web9/cipher"
	"github.com/tuckersGo/goWeb/web9/lzw"
)

type Component interface {
	Operator(string)
}

var sentData string
var recvData string

type SendComponent struct {
}

func (s *SendComponent) Operator(data string) {
	sentData = data

}

type ZipComponent struct {
	com Component
}

func (s *ZipComponent) Operator(data string) {
	convData, err := lzw.Write([]byte(data))
	if err != nil {
		panic(err)
	}

	s.com.Operator(string(convData))
}

type EncryptComponent struct {
	key string
	com Component
}

func (s *EncryptComponent) Operator(data string) {
	convData, err := cipher.Encrypt([]byte(data), s.key)
	if err != nil {
		panic(err)
	}

	s.com.Operator(string(convData))
}

type DecryptComponent struct {
	key string
	com Component
}

func (s *DecryptComponent) Operator(data string) {
	convData, err := cipher.Decrypt([]byte(data), s.key)
	if err != nil {
		panic(err)
	}

	s.com.Operator(string(convData))
}

type UnZipComponent struct {
	com Component
}

func (s *UnZipComponent) Operator(data string) {
	convData, err := lzw.Read([]byte(data))
	if err != nil {
		panic(err)
	}

	s.com.Operator(string(convData))
}

type ReadComponent struct {
}

func (s *ReadComponent) Operator(data string) {
	recvData = data
}

func main() {
	sender := &EncryptComponent{key: "abcde",
		com: &ZipComponent{
			com: &SendComponent{},
		},
	}

	sender.Operator("hello world")

	console.PrintColoredLn("DONE", console.Success)
	console.PrintColoredLn(sentData, console.Info)

	receiver := &UnZipComponent{
		com: &DecryptComponent{
			key: "abcde",
			com: &ReadComponent{},
		},
	}

	receiver.Operator(sentData)

	console.PrintColoredLn("DONE", console.Cute)
	console.PrintColoredLn(recvData, console.Info)
}
