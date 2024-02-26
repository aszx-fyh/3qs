package main

import "fmt"

type C struct{}

type A struct {
	B []C
	D *[]C
	C
}

func main() {
	var a A
	a.B = append(a.B, C{})
	a.D = &a.B
	arr := append(*a.D, C{})

	b := A{
		B: a.B,
		D: a.D,
	}
	fmt.Println(a, arr, b)
}
