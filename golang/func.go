package main

import (
	"fmt"
	"math"
)

// 上面的代码中，maxMin 函数接收可变参数，并返回参数中的最大值和最小值。
// 如果参数个数为0，则返回错误。
// maxMin 函数接收可变参数，并返回最大值和最小值
func maxMin(nums ...int) (max int, min int, err error) {
	// 如果参数个数为0，则返回错误
	err = fmt.Errorf("err: 参数个数为0")
	if len(nums) == 0 {
		return 0, 0, err
	}
	// 初始化最小值为最大整数
	min = math.MaxInt
	// 遍历所有参数，求最大值和最小值
	for _, num := range nums {
		if num > max {
			max = num
		}
		if num < min {
			min = num
		}
	}
	return max, min, nil
}

func main() {
	var maxNum, minNum int
	// 可以选择处理错误, 也可以选择不处理，直接丢弃掉
	maxNum, minNum, _ = maxMin(4, 2, 3)
	fmt.Println(maxNum, minNum)
	// 也可以选择处理此错误
	maxNum, minNum, err := maxMin()
	if err != nil {
		fmt.Println(err)
	}
}
