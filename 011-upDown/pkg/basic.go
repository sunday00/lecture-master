package pkg

import (
	"bufio"
	"fmt"
	"github.com/sunday00/go-console"
	random "math/rand"
	"os"
	"strconv"
	"time"
)

var target int

var scanner = bufio.NewReader(os.Stdin)

func init() {
	random.Seed(time.Now().UnixNano())

	target = random.Intn(999) + 1
}

type Config struct {
	User      int
	Tried     int
	Min       int
	Max       int
	LastOrder string
}

func (p Pkg) Start() {
	console.PrintColored("please input 1~1000 : ", console.Info)

	var config = Config{0, 0, 0, 1000, ""}

	for {
		isSetUserNumber := setUserNumber(&config)
		if !isSetUserNumber {
			//_, _ = scanner.ReadString('\n')
			continue
		}

		result := compareNumber(&config)

		if result {
			break
		}
	}

	console.PrintColoredRainbow("\n\ncongratulation.\n")
	console.KeyValue("Answer", strconv.Itoa(target))
	console.KeyValue("YouTried", strconv.Itoa(config.Tried))
	console.PrintColoredRainbow("\ncongratulation.\n")
}

func setUserNumber(config *Config) bool {
	_, err := fmt.Scanln(&config.User)

	if err != nil {
		console.PrintColoredLn("Not a number. please input 1~1000", console.Danger)
		_, _ = scanner.ReadString('\n')
		return false
	}

	if config.User < 0 || config.User > 1000 {
		console.PrintColoredLn("wrong number. please input 1~1000", console.Danger)
		_, _ = scanner.ReadString('\n')
		return false
	}

	return true
}

func compareNumber(config *Config) bool {
	if config.User != target {
		config.Tried = config.Tried + 1

		switch true {
		case config.User > target:
			config.LastOrder = "down"
			setHint(config)
			console.PrintColoredF("down. tried %d. ", console.Cute, config.Tried)
			console.PrintColoredF("%s : ", console.Success, getHint(config))
		case config.User < target:
			config.LastOrder = "up"
			setHint(config)
			console.PrintColoredF("up. tried %d. ", console.Warning, config.Tried)
			console.PrintColoredF("%s : ", console.Success, getHint(config))
		}

		return false
	}

	return true
}

func setHint(config *Config) {
	if config.LastOrder == "down" && config.Max > config.User {
		config.Max = config.User
	}

	if config.LastOrder == "up" && config.Min < config.User {
		config.Min = config.User
	}
}

func getHint(config *Config) string {
	return fmt.Sprintf("hint: %d < target < %d", config.Min, config.Max)
}
