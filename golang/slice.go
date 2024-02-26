package main

import (
	"fmt"
)

func main() {
	// var s []int = make([]int, 5)
	// ss := make([]int, 6)
	// sss := make([]int, 6, 10)
	// arr := []int{1, 2, 3}
	// s1 := arr[:]
	// a := [...]int{0, 1, 2, 3, 4, 5}
	// a1 := []int{0, 1, 2, 3, 4, 5}

	// fmt.Printf("%T,%T", a, a1)

	var s []int // len(s) == 0, s == nil
	fmt.Println(len(s) == 0, s == nil)
	s = nil // len(s) == 0, s == nil
	fmt.Println(len(s) == 0, s == nil)
	s = []int(nil) // len(s) == 0, s == nil
	fmt.Println(len(s) == 0, s == nil)
	s = []int{} // len(s) == 0, s != nil
	fmt.Println(len(s) == 0, s == nil)
	dd := "go语言圣经"
	fmt.Println(dd[0:5], len(dd))
	s1 := []int{1, 2, 4}
	s2 := append(s1, s1...)
	fmt.Println(s2)

	var contentIds []uint64
	contentIds = append(contentIds, 111)
	fmt.Println(contentIds)

}
