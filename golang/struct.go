package main

import (
	"fmt"
	"time"
	"unsafe"
)

type Books struct {
	title   string
	author  string
	subject string
	book_id int
}

type Dir struct {
	Books
}

type EST struct{}

func main() {
	// 创建一个新的结构体
	fmt.Println(Books{"Go 语言", "www.runoob.com", "Go 语言教程", 6495407})

	// 也可以使用 key => value 格式
	fmt.Println(Books{title: "Go 语言", author: "www.runoob.com", subject: "Go 语言教程", book_id: 6495407})

	// 忽略的字段为 0 或 空
	fmt.Println(Books{title: "Go 语言", author: "www.runoob.com"})

	a := [2]*Books{
		&Books{title: "Go 语言", author: "www.runoob.com"},
		&Books{title: "xxx", author: "d"},
	}
	var b []Books

	b = []Books{
		Books{title: "xxx", author: "d"},
	}
	// b[0] = Books{title: "xxx", author: "d"}
	fmt.Println(a, b)
	var dir Dir
	dir.title = "ddd"
	fmt.Println(dir)

	var bcc EST
	var ccc struct{}
	fmt.Printf("bcc address %p size %d\n", &bcc, unsafe.Sizeof(bcc))
	fmt.Printf("ccc address %p size %d\n", &ccc, unsafe.Sizeof(ccc))

	students := make(map[string]struct{}, 10)
	students["张三"] = EST{}
	students["李四"] = struct{}{}
	fmt.Println(len(students))

	teachers := make(chan struct{}, 0)
	go func() {
		time.Sleep(3 * time.Second)
		fmt.Println("子携程工作完毕")
		teachers <- struct{}{}
	}()
	<-teachers
}
