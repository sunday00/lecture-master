package pkg

import (
	"fmt"
	"time"
)

func (p Pkg) Time() {
	t := time.Now()

	fmt.Printf("%v \n", t)

	println(t.UnixNano())

	println(t.Format("2006-01-02 15:04:05"))

	println(time.Now().Sub(t).Nanoseconds())

	customTime := time.Date(2000, 1, 1, 12, 0, 0, 0, time.UTC)

	println(customTime.String())

	seoulLoc, _ := time.LoadLocation("Asia/Seoul")
	seoulNow, _ := time.ParseInLocation("2006-01-02 15:04:05", time.Now().Format("2006-01-02 15:04:05"), seoulLoc)

	utcLoc, _ := time.LoadLocation("UTC")
	utcNow, _ := time.ParseInLocation("2006-01-02 15:04:05", time.Now().Format("2006-01-02 15:04:05"), utcLoc)

	println(utcNow.Sub(seoulNow).String())
}

func (p Pkg) template() {

}
