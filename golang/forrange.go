package main

import (
	"fmt"
	"time"
)

func main() {
	// ex1()
	// ex2()
	ex3()
}

func ex1() {
	arr := []int{1, 2, 3, 4, 5, 6}
	print := func(n int) {
		// 传值会复制,每个n地址不一样
		fmt.Println("传值:", n, &n)
	}
	printPt := func(n *int) {
		// 每个n(地址)一样
		fmt.Println("传指针:", *n, n)
	}
	for _, v := range arr {
		print(v)
	}
	for _, v := range arr {
		printPt(&v)
	}
}

func ex2() {
	arr := []int{1, 2, 3, 4, 5, 6}
	printPt := func(n *int) {
		// 每个n(地址)一样,但值却不是那次循环的值
		fmt.Println("传指针:", *n, n)
	}

	for _, v := range arr {
		// goroutine传指针,无法获取当此循环的值
		// goroutine是异步的,&v指向的值早已改变
		go printPt(&v)
	}
	time.Sleep(time.Second)
}

func ex3() {
	s := []int{1, 2, 3, 4, 5, 6}
	for _, v := range s {
		println(&v) // v变量地址不变
	}

	for i := 0; i < len(s); i++ {
		println(&s[i]) // 打印切片中的元素地址
	}
}
