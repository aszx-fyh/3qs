package main

import (
	"fmt"
	"sync"
)

func main() {
	in := gen(2, 3)

	// FAN OUT
	// Distribute the sq work across two goroutines that both read from in.
	c1 := sq(in)
	c2 := sq(in)

	// FAN IN
	// Consume the merged output from multiple channels.
	for n := range merge(c1, c2) {
		fmt.Println(n) // 4 then 9, or 9 then 4
	}
}

func gen(nums ...int) chan int {
	fmt.Printf("TYPE OF NUMS %T\n", nums) // just FYI

	out := make(chan int)
	go func() {
		for _, num := range nums {
			out <- num
		}
		close(out)
	}()

	return out
}

func sq(in chan int) chan int {
	out := make(chan int)
	go func() {
		for v := range in {
			out <- v
		}
		close(out)
	}()
	return out
}

func merge(cs ...chan int) chan int {
	fmt.Printf("TYPE OF CS: %T\n", cs) // just FYI

	out := make(chan int)
	wg := &sync.WaitGroup{}
	wg.Add(len(cs))
	for _, c := range cs {
		go func(c chan int) {
			defer wg.Done()
			for v := range c {
				out <- v
			}
			//close(c)，chan c这里是使用方，应该由发送方关闭
		}(c)
	}

	go func() {
		wg.Wait()
		close(out)
	}()
	return out
}

/*
FAN OUT
Multiple functions reading from the same channel until that channel is closed

FAN IN
A function can read from multiple inputs and proceed until all are closed by
multiplexing the input channels onto a single channel that's closed when
all the inputs are closed.

PATTERN
there's a pattern to our pipeline functions:
-- stages close their outbound channels when all the send operations are done.
-- stages keep receiving values from inbound channels until those channels are closed.

source:
https://blog.golang.org/pipelines
*/

/*
CHALLENGE #1
When know HOW to do fan out / fan in, but do we know WHY?
Why would we want to do fan out / fan in?
*/
