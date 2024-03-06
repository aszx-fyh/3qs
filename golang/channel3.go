package main

import (
	"fmt"
	"time"
)

func main() {
	// c1()
	// c2()
	// c3()
	// c4()
	// c5()
	// c6()
	// c7()
	c8()
}

func c1() {
	c := make(chan int)
	go func() {
		fmt.Println("<-c")
		c <- 111 // 一个基于无缓存Channels的发送操作将导致发送者goroutine阻塞
		fmt.Println("no print")
	}()
	time.Sleep(time.Second * 10)
}

func c2() {
	c := make(chan int)
	go func() {
		fmt.Println("chan send")
		c <- 111
		fmt.Println("no print")
	}()
	go func() {
		fmt.Println("chan received")

		fmt.Println("print!", <-c) // 这个goroutine接受channel的值，不会阻塞2个goroutine
	}()
	// 反之，如果接收操作先发生，那么接收者goroutine也将阻塞，直到有另一个goroutine在相同的Channels上执行发送操作
	time.Sleep(time.Second * 10)
}

func c3() {
	c := make(chan int)
	go func() {
		for i := 0; i < 2; i++ { // 发送2次
			c <- i
			fmt.Println("send", i)
		}
	}()
	go func() {
		for i := 0; i < 3; i++ { // 接受3次，第3次没有接受到数据将阻塞
			fmt.Println("received", <-c)
		}
		fmt.Println("no print") //这句不会执行，且会一直阻塞该goroutine
	}()
	time.Sleep(time.Second * 10)
}

func c4() {
	c := make(chan int)
	go func() {
		for i := 0; i < 3; i++ { // 发送3次
			c <- i
			fmt.Println("send", i)
		}
		fmt.Println("no print") //这句不会执行，且会一直阻塞该goroutine
	}()
	go func() {
		for i := 0; i < 2; i++ { // 接受2次
			fmt.Println("received", <-c)
		}
	}()
	time.Sleep(time.Second * 10)
}

func c5() {
	c := make(chan int)
	go func() {
		for i := 0; i < 3; i++ {
			c <- i
			fmt.Println("send:", i)
		}
		close(c) // 知道数据量，发送完后手动关闭channel，否则range channel会deadlock
	}()
	for v := range c {
		fmt.Println("received:", v)
	}
}
func c6() {
	c := make(chan int)
	go func() {
		for {
			c <- 1
			fmt.Println("send:")
		}
		// close(c) // 不知道数据量，或者无法手动关闭channel
	}()
	go func() {
		for v := range c { // 一直读取channel,阻塞该goroutine
			fmt.Println("received:", v)
		}
		fmt.Println("no print") // 这里不会执行
	}()
	time.Sleep(time.Second * 5)
}

func c7() {
	c := make(chan int, 3) // 带缓存的channel,容量为3
	go func() {
		c <- 4
		c <- 1
		c <- 88
		// 使channel队列队满
	}()
	go func() {
		fmt.Println(<-c)
		fmt.Println(<-c)
		fmt.Println(<-c)
		fmt.Println(<-c)        //channel已空，此接受操作会阻塞goroutine
		fmt.Println("no print") //代码不会执行
	}()
	time.Sleep(time.Second * 5)
}

func c8() {
	c := make(chan int, 3) // 带缓存的channel,容量为3
	go func() {
		c <- 4
		c <- 1
		c <- 88                 // 此发送操作没用对应的接受操作，会留在channel的缓存中
		fmt.Println("no print") // 代码会执行
	}()
	go func() {
		fmt.Println(<-c)
		fmt.Println(<-c)
	}()
	time.Sleep(time.Second * 5)
}
