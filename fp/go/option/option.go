package option

import (
	"fmt"

	opt "github.com/repeale/fp-go/option"
)

func Exec() {
	getAge := opt.GetOrElse[int](func() int {
		return 99
	})
	fmt.Println(getAge(opt.Some(12)))
	fmt.Println(getAge(opt.None[int]()))
	fmt.Println(opt.Map[int, string](func(n int) string {
		return fmt.Sprintf("哈哈：%d", n)
	})(opt.Some(12)))
}
