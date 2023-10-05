package main

import "fmt"

func function(index int, value int) int {

	fmt.Println(index)

	return index
}

func adr(a int) (c int) {
	defer func() {
		c++
		fmt.Println(88888, c)
	}()
	defer func() {
		c += 8
		fmt.Println(999, c)
	}()
	a++
	c = a
	return c
}

func main() {
	var b, a int
	b = adr(a)
	fmt.Println(a, b)
}
