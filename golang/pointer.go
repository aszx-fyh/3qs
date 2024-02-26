package main

import "fmt"

const MAX int = 3

// func main() {
// 	a := []int{10, 100, 200}
// 	var ptr [MAX]*int

// 	for i := 0; i < MAX; i++ {
// 		ptr[i] = &a[i]
// 	}

// 	for i := 0; i < MAX; i++ {
// 		fmt.Printf("a[%d] = %d\n", i,*ptr[i])
// 	}
// }

func main() {
	//exe1()
	exe2()
}
func exe1() {
	a := 100
	b := 200

	fmt.Printf("交换前 a 的值 : %d\n", a)
	fmt.Printf("交换前 b 的值 : %d\n", b)

	swap(&a, &b)

	fmt.Printf("交换后 a 的值 : %d\n", a)
	fmt.Printf("交换后 b 的值 : %d\n", b)
}
func swap(x *int, y *int) {
	temp := *x
	*x = *y
	*y = temp
}
func exe2() {
	a := 100
	var b *int
	b = &a
	fmt.Println(a, b)
	err := testPointer()
	var errPointer *error
	errPointer = &err
	fmt.Println(errPointer, *errPointer)
}

func testPointer() error {
	return nil
}
