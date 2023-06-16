package main

import (
	"fmt"
)

type Animal interface {
	Show()
}

type Cat struct {
	name string
	age  int
}

func (this *Cat) Show() {
	fmt.Printf("Cat: name=%s, age=%d\n", this.name, this.age)
}

type Dog struct {
	name string
	age  int
}

func (this *Dog) Show() {
	fmt.Printf("Dog: name=%s, age=%d\n", this.name, this.age)
}
func (this Dog) Eat(w string) {
	this.name = w
	fmt.Printf("Dog Eat: name=%s, age=%d\n", this.name, this.age)
}

func main() {

	a1 := Cat{
		name: "Cat",
		age:  33,
	}
	a2 := Dog{
		name: "Dog",
		age:  2,
	}
	a1.Show()
	a2.Show()
	var a3 Animal
	a3 = &a1

	a3.Show()
	a2.Eat("还好")
	fmt.Println(a2.name)
	Dog.Eat(a2, "sss")
}
