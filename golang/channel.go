package main

import (
	"fmt"
	"sync"
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
	// ex5()
	ex6()
	// ex7()
	// ex8()
	// ex9()
	// ex10()
}

func ex5() {
	arr := []int{1, 2, 3, 5, 6, 4}
	ch := make(chan int, 1)
	// for _, v := range arr {
	// 	go doSomething(v, ch)
	// }

	var tx int
	// errs := []int{}
	go func() {
		// time.Sleep(time.Second * 2)
		ch <- 11
		fmt.Println("aaaa")
		ch <- 20
		fmt.Println("3333")
		ch <- 23
		fmt.Println("4444")
		// ch <- 19
		// fmt.Println("5555")
		// ch <- 12
		// fmt.Println("6666")
		// ch <- 13
	}()
	// go func() {
	// 	tx = <-ch
	// }()
	// fmt.Println("0000", tx)
	// tx = <-ch
	// fmt.Println("xxxss", tx)
	tx = <-ch
	tx = <-ch
	time.Sleep(time.Second * 2)

	fmt.Println("xxxs1111s", tx, len(ch))
	// for {
	// 	select {
	// 	case tx = <-ch:
	// 		fmt.Println(1111, tx)
	// 		errs = append(errs, tx)
	// 		if len(errs) == len(arr) {
	// 			goto dd
	// 		}
	// 	default:
	// 		fmt.Println("finish", errs)
	// 	}
	// 	// }
	// dd:
	count := 0
	// for _, v := range errs {
	// 	if v == 0 {
	// 		count += 1
	// 	}
	// }
	fmt.Printf("dddd:%d", count, tx, arr)
	// t.Logf("dddd:%d", tx)
}

func doSomething(v int, ch chan int) {
	if v > 3 {
		ch <- 1
	} else {
		ch <- 0
	}
}

func ex6() {
	wg := sync.WaitGroup{}
	wg.Add(3)
	str := ""
	go func() {

		defer wg.Done()
		for i := 0; i < 100000; i++ {

		}
		str = "111"
		fmt.Println(1111)
	}()
	go func() {

		defer wg.Done()
		for i := 0; i < 100000; i++ {

		}
		str = "222"
		fmt.Println(2222)
	}()
	go func() {

		defer wg.Done()
		for i := 0; i < 100000; i++ {

		}
		str = "333"
		fmt.Println(3333)

	}()
	wg.Wait()
	fmt.Println("print:", str)
}

func ex7() {
	mx := sync.Mutex{}
	cond := sync.NewCond(&mx)
	str := ""
	go func() {
		defer cond.Signal()
		for i := 0; i < 100000; i++ {

		}
		str = "111"
		fmt.Println(1111)
	}()
	go func() {
		defer cond.Signal()
		for i := 0; i < 100000; i++ {

		}
		str = "222"
		fmt.Println(2222)

	}()
	go func() {
		defer cond.Signal()
		for i := 0; i < 100000; i++ {

		}
		str = "333"
		fmt.Println(3333)
	}()
	mx.Lock()
	cond.Wait() // await
	mx.Unlock()
	fmt.Println(str)
}

func ex8() {
	doSomething := func(n int) chan int {
		ch := make(chan int)
		go func(n int) {
			for i := 0; i < 1000; i++ {
				fmt.Println("ss", n)
			}
			ch <- n
		}(n)
		return ch
	}

	fmt.Println("result", <-doSomething(1))
	fmt.Println("-----------------")
	fmt.Println("result", <-doSomething(2))
	time.Sleep(time.Second)
}

func ex9() {
	doSomething := func(n int) chan int {
		ch := make(chan int, 10)

		for i := 0; i < 10; i++ {
			go func(n int) {
				ch <- n
			}(i)
		}

		return ch
	}
	ch := doSomething(111)
	for {
		select {
		case n := <-ch:
			fmt.Println("result", n, len(ch))
			if len(ch) == 0 {
				goto dd
			}
		}
	}
	// time.Sleep(time.Second * 4)
dd:
	fmt.Println("-----------------")

}
func ex10() {
	print := func(n int) {
		fmt.Println(n)
	}
	arr := []int{1, 2, 3, 4, 5, 6}
	for _, n := range arr {
		go print(n)
	}
	time.Sleep(time.Second)
}
