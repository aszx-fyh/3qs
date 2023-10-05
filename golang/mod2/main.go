package main

import (
	"bytes"
	"fmt"
	"io"
)

const debug = false

type Book interface {
	ak()
}

func main() {
	var buf *bytes.Buffer = nil
	if debug {
		buf = new(bytes.Buffer) // enable collection of output
	}

	f(buf) // NOTE: subtly incorrect!
	if debug {
		// ...use buf...
	}
}

// If out is non-nil, output will be written to it.
func f(out io.Writer) {
	fmt.Println(out, out != nil)

	// ...do something...
	// if out != nil {
	// 	out.Write([]byte("done!\n"))
	// }
}
