package main

import (
	"fmt"
	"sync"
	"time"
)

func doSomething(num int) {
	fmt.Println("result %d", num)
}

func asyncDoSometing(num int, wg *sync.WaitGroup) {
	time.Sleep(time.Second)
	fmt.Println("result %d", num)
	wg.Done()
}

func main() {
	start := time.Now()
	var wg sync.WaitGroup
	// wg.Wait()
	for i := 0; i < 100; i++ {
		wg.Add(1)
		// go doSomething(13)
		go asyncDoSometing(13, &wg)
	}
	wg.Wait()

	// time.Sleep(time.Second)
	fmt.Println("use time:", time.Since(start))
	fmt.Println("end game")
}
