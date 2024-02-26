package main

import "fmt"

func main() {
	s := make(map[*string]string)
	s[nil] = "sss"
	s[nil] = "888"
	fmt.Println(s)
}
