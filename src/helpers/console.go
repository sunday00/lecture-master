package helpers

import "fmt"

// PrintEmp returns string with divided lines
func PrintEmp(str string) {
	fmt.Println("\n===============================")
	fmt.Println(str)
	fmt.Println("===============================\n ")
}

// Mode is colored code
type Mode string

// Colors
const (
	White   Mode = Mode("white")
	Black   Mode = Mode("black")
	Warning Mode = Mode("warning")
	Info    Mode = Mode("info")
	Danger  Mode = Mode("danger")
	Panic   Mode = Mode("panic")
	Cute    Mode = Mode("cute")
	Success Mode = Mode("success")
)

// PrintColored print console with simple color. Valid modes are: black, white.
func PrintColored(str interface{}, m Mode) {
	switch m {
	case "white":
		fmt.Printf("\033[38;5;15m%s\033[0m", str)
		break
	case "black":
		fmt.Printf("\033[38;5;0;48;5;15m%s\033[0m", str)
		break
	case "warning":
		fmt.Printf("\033[38;5;11m%s\033[0m", str)
		break
	case "info":
		fmt.Printf("\033[38;5;14m%s\033[0m", str)
		break
	case "danger":
		fmt.Printf("\033[38;5;166m%s\033[0m", str)
		break
	case "panic":
		fmt.Printf("\033[38;5;9m%s\033[0m", str)
		break
	case "cute":
		fmt.Printf("\033[38;5;13m%s\033[0m", str)
		break
	case "success":
		fmt.Printf("\033[38;5;10m%s\033[0m", str)
		break
	}
}

// PrintColoredLn excute PrintColored with br
func PrintColoredLn(str interface{}, m Mode) {
	PrintColored(fmt.Sprint(str)+"\n", m)
}
