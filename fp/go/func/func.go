package myfunc

import (
	"fmt"
)

// 一种函数类型的变量
var FV = func(arg int) {
	fmt.Println("fv", arg)
}

// 一种函数类型
type FT func(arg int)

// 类型可以有自己的方法
func (ft FT) Hello(arg int) {
	ft(arg)
}

// 类型可以实现接口
type IFC interface {
	Hello(arg int)
}

func ex(i IFC) {
	i.Hello(999)
}
func ex1(i FT) {
	i.Hello(8888)
}

func Exec() {
	FV(3)
	dd := new(FT)
	dd = (*FT)(&FV)
	(*dd)(33)
	dd.Hello(99)
	ex(*dd)
	ex1(*dd)

}
