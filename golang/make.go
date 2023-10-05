package main

import "fmt"

func change(slice []int) {
	d := slice[0]
	fmt.Println("%v", d)
}

func changePointer(slice *[]int) {
	(*slice)[0] = 111
}

func main() {
	s := make([]int, 1, 10)
	s[0] = 99
	change(s)
	fmt.Println("%v,%d,%d", s, len(s), cap(s))
	ssptr := new([]int)
	ss := append(*ssptr, 2)
	changePointer(&ss)
	fmt.Println(ss)
}
