package main

import (
	"html/template"
	"os"
)

type User struct {
	Name  string
	Email string
	Age   int
}

func (u User) IsOld() bool {
	return u.Age > 30
}

func main() {

	user := User{Name: "sunday00", Email: "sunday_0@hotmail.com", Age: 33}

	// tmpl, _ := template.New("Tmpl1").Parse("Name: {{.Name}}\nEmail: {{.Email}}\nAge: {{.Age}}")

	tmpl, _ := template.New("Tmpl1").ParseFiles("templates/tmpl1.tmpl")

	// tmpl.Execute(os.Stdout, user)
	tmpl.ExecuteTemplate(os.Stdout, "tmpl1.tmpl", user)

	tmpl2, _ := template.New("Tmpl2").ParseFiles("templates/tmpl1.tmpl", "templates/tmpl2.tmpl", "templates/tmpl3.tmpl")

	user2 := User{Name: "Monday00", Email: "sunday_0000@hotmail.com", Age: 33}
	users := []User{user, user2}

	tmpl2.ExecuteTemplate(os.Stdout, "tmpl3.tmpl", users)

	tmpl2.ExecuteTemplate(os.Stdout, "tmpl2.tmpl", user)
}
