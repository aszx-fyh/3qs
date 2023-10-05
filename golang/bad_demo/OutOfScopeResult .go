package main

import (
	"errors"
	"fmt"
)

func check1() (int, error) {
	return 1, errors.New("text")
}
func check2(x int) (int, error) {
	return x, errors.New("text11")
}
func shadow() (err error) {
	x, err := check1() // x是新创建变量，err是被赋值
	if err != nil {
		return // 正确返回err
	}

	if y, err := check2(x); err != nil { // y和if语句中err被创建
		return // if语句中的err覆盖外面的err，所以错误的返回nil！
	} else {
		fmt.Println(err)
	}

	return err
}

func factor(n int) (i int) {
	for i := 2; i < n; i++ {
		if n%i == 0 {
			return
		}
	}

	return 0
}
