package main

import (
	"fmt"
	"reflect"
)

func print(d any) {
	// fmt.Println(reflect.TypeOf(d))
	fmt.Println(reflect.TypeOf(d).Kind())
	// fmt.Println(reflect.TypeOf(d).Name())
	// fmt.Println(reflect.ValueOf(d))
	fmt.Println(reflect.ValueOf(d).Kind())
	fmt.Println(reflect.ValueOf(d).IsNil())
	fmt.Println("-----------------")
}

func main() {
	print(3)
	print("abd")
	print([]int{1, 2, 3})
	print(struct {
		name string
		age  int
	}{name: "abd", age: 18})
}
