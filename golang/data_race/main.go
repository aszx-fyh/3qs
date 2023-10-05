package main

import (
	"fmt"
	"sync"
	"sync/atomic"
)

type Counter struct {
	// sync.Mutex
	number int32
}

func (c *Counter) AddNumber(i int) {
	// c.Mutex.Lock()
	// defer c.Mutex.Unlock()
	// c.number += i
	atomic.AddInt32(&c.number, int32(i))
}

// 做data race检查 在go test package
func main() {
	counter := &Counter{}
	wg := &sync.WaitGroup{}
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(i int) {
			counter.AddNumber(i)
			wg.Done()
		}(i)

	}
	wg.Wait()
	fmt.Printf("%+v", counter)
}
