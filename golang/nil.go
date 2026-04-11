package main

import "fmt"

type dd struct {
	Name string
}

func main() {
	s := make(map[*string]string)
	s[nil] = "sss"
	s[nil] = "888"
	fmt.Println(s)
	d := new(dd)
	ddd := d
	d.Name = "3333"
	ddd.Name = "8888"
	var d1 *dd
	fmt.Println(d)
	fmt.Println(d1)
	fmt.Println(ddd)
}
