package main

import (
	"fmt"
	"sync"
	"time"
)

func learning(s string, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println("try to learning", s)
}

var wg sync.WaitGroup

func createChan1(ch chan string) {
	for {
		time.Sleep(4 * time.Second)
		ch <- "this is chan1"
	}
}

func createChan2(ch chan string) {
	for {
		time.Sleep(2 * time.Second)
		ch <- "this is chan2"
	}
}

func main() {
	fmt.Println("ex1")
	langword := []string{
		"java", "c++", "javascript", "c#", "c", "php", "python",
	}
	wg.Add(len(langword))
	for i, v := range langword {
		go learning(fmt.Sprintf("learn %d,word %s", i, v), &wg)
	}
	wg.Wait()

	fmt.Println("ex2")

	chan1 := make(chan string)
	chan2 := make(chan string)

	go createChan1(chan1)
	go createChan1(chan2)

	for {
		select {
		case string1 := <-chan1:
			fmt.Println("stirng1 get ", string1)
		case string2 := <-chan2:
			fmt.Println("stirng2 get ", string2)
		default:
			time.Sleep(1 * time.Second)
			fmt.Println("间歇显示")
		}
	}

	fmt.Println("end")
}
