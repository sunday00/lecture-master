package pkg

import (
	"fmt"
	"github.com/sunday00/go-console"
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

	t2, _ := time.Parse("2006-01-02 15:04:05", "2023-06-28 11:11:11")
	console.KeyValue("t2", t2.String())

	t3, _ := time.Parse(time.RFC3339, "2023-06-28T11:11:11+09:00")
	console.KeyValue("t3", t3.String())

	onlySeconds, _ := time.Parse("05", "55")
	println(onlySeconds.Second())
}

func (p Pkg) template() {

}
