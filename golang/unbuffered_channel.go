package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan int)
	go func(ch chan int) {
		// ch <- 1
		fmt.Println("send")

	}(ch)
	go func(ch chan int) {
		<-ch
		fmt.Println("receiver")
	}(ch)

	time.Sleep(time.Second * 10)
}
