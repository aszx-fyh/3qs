package main

import (
	"fmt"
	"strings"
)

func main() {
	str := `dsd 
	sd 
	ssssd`
	fmt.Printf(strings.ReplaceAll(str, "\n\t", " "))
}
