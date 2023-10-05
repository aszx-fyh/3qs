package main

import "fmt"

type Hello interface {
	Hello(str string) string
}

type Hello1 struct {
}

func (h Hello1) Hello(str string) string {
	return str
}

func empty(s any) {

}

func main() {
	var (
		hello  Hello
		hello1 Hello1
	)
	hello = hello1
	fmt.Print(hello.Hello("哈哈哈"))
	empty(false)
	empty("")
	empty(2323)
}
