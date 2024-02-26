package optionMode

import "fmt"

type Message struct {
	id      int
	name    string
	address string
	phone   int
}

func New(id, phone int, name, addr string) Message {
	return Message{
		id:      id,
		phone:   phone,
		name:    name,
		address: addr,
	}
}

type Option func(msg *Message)

func WithID(id int) Option {
	return func(m *Message) {
		m.id = id
	}
}
func WithPhone(phone int) Option {
	return func(m *Message) {
		m.phone = phone
	}
}
func WithName(name string) Option {
	return func(m *Message) {
		m.name = name
	}
}
func WithAddress(addr string) Option {
	return func(m *Message) {
		m.address = addr
	}
}

var DEFAULT_MESSAGE = Message{
	id:      1,
	phone:   222,
	name:    "Ddf",
	address: "zkk",
}

func NewByOption(opts ...Option) Message {
	msg := DEFAULT_MESSAGE
	for _, o := range opts {
		o(&msg)
	}
	return msg
}

func NewByOptionWithoutID(id int, opts ...Option) Message {
	msg := DEFAULT_MESSAGE
	msg.id = id
	for _, o := range opts {
		o(&msg)
	}
	return msg
}

func Exec() {
	msg1 := New(2, 3, "xxxx", "dddd")
	msg2 := NewByOption(WithID(9), WithAddress("zjzzzz"))
	msg3 := NewByOptionWithoutID(3, WithName("ssd"), WithPhone(999))
	fmt.Println(msg1)
	fmt.Println(msg2)
	fmt.Println(msg3)
}
