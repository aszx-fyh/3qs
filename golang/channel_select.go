package main

import (
	"fmt"
	"time"
)

func main() {
	// c1()
	c2()
}
func c1() {
	c1 := make(chan int)
	c2 := make(chan int)
	go func() {
		time.Sleep(time.Second * 2)
		c1 <- 111
		fmt.Println("c1 send")
	}()
	go func() {
		time.Sleep(time.Second * 3)
		c2 <- 222
		fmt.Println("c2 send")
	}()
	for {
		select {
		case <-c1:
			fmt.Println("c1 received")
		case <-c2:
			fmt.Println("c2 received")
			// default:
			// 	fmt.Println("select default")
		}
	}
}

func c2() {
	var done = make(chan struct{})
	go func() {
		fmt.Println("close done")
		close(done)
	}()
	select {
	case d := <-done: // close关闭chan会发送 chan数据类型的零值
		fmt.Println(d)
	}
}
