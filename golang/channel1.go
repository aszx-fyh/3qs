package main

import "fmt"

func main() {
	c := incrementor()
	for n := range puller(c) {
		fmt.Println(n)
	}
}

func incrementor() <-chan int {
	c := make(chan int)
	go func() {
		defer close(c)
		for i := 0; i < 10; i++ {
			c <- i
		}
	}()

	return c
}

func puller(c <-chan int) <-chan int {
	out := make(chan int)
	go func() {
		// for v := range c {
		// 	sum := v + 11
		// 	out <- sum
		// }
		// close(out)
		var sum int
		for n := range c {
			sum += n
		}
		out <- sum
		close(out)
	}()
	return out
}
