package main

import "fmt"

// func main() {
// 	var balance= [5]int{1000,2,3,17,50}
// 	var avg float32
// 	avg=getAverage(balance,5)

// 	fmt.Printf("平均值为：%f",avg)
// }
func getAverage(arr [5]int, size int) float32 {
	var sum int
	var avg float32
	for i := 0; i < size; i++ {
		sum += arr[i]
	}
	avg = float32(sum) / float32(size)
	return avg
}

func main() {
	a := 1.69
	b := 1.7
	c := a * b
	fmt.Println(c)
	fmt.Println(float64(c) / 1000000)
	aa, bb := ak()
	fmt.Println(aa, bb)
	q := [...]int{1, 2, 3}
	cc := ak1(q)
	fmt.Println(cc, q)
}

// 返回多个值
func ak() (int, int) {
	return 1, 2
}
func ak1(arr [3]int) [3]int {
	arr[0] = 999
	return arr
}
