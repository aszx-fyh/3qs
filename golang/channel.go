package main

import (
	"fmt"
	"time"
)

func ex1() {
	ch := make(chan int, 1)
	for i := 0; i < 10; i++ {
		select {
		case x := <-ch:
			fmt.Println(x, i) // "0" "2" "4" "6" "8"
		case ch <- i:
		}
	}
}

func ex2() {
	var ch1 chan string
	fmt.Println(ch1)
	ch1 = make(chan string)
	fmt.Printf("%T", ch1)
}
func ex3() {

	sendData := func(ch chan string) {
		ch <- "Washington"
		ch <- "Tripoli"
		ch <- "London"
		ch <- "Beijing"
		ch <- "Tokio"
	}

	getData := func(ch chan string) {
		var input string
		// time.Sleep(2e9)
		for {
			input = <-ch
			fmt.Printf("%s ", input)
		}
	}
	ch := make(chan string)

	go sendData(ch)
	go getData(ch)

	time.Sleep(1e9)
}

func ex4() {
	// pump := func(ch chan int) {
	// 	for i := 0; ; i++ {
	// 		ch <- i
	// 	}
	// }
	ch1 := make(chan int)
	// go pump(ch1)

	go func() {
		ch1 <- 2
		fmt.Println(<-ch1)
	}()
	// go func() {
	// 	fmt.Println(<-ch1)
	// }()
	// time.Sleep(2 * time.Second)
}

func main() {
	// ex1()
	// ex2()
	// ex3()
	// ex4()
	ch1 := make(chan int)

	ch1 <- 2
	time.Sleep(3 * time.Second)
	a := <-ch1
	fmt.Println(a)

}
