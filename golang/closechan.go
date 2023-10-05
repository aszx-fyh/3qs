package main

import "fmt"

func main() {
	ch := make(chan int, 100)
	for i := 0; i < 10; i++ {
		ch <- i
	}
	// close(ch)
	for v := range ch {
		fmt.Println("接收, %d", v)
	}
	// if v, ok := <-ch; ok {
	// 	fmt.Println("接收, %d", v)
	// }
	// for {
	// 	item, ok := <-ch
	// 	if !ok {
	// 		break
	// 	}
	// 	fmt.Println("接收, %d", item)
	// }
}
