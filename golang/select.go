package main

import (
	"fmt"
	"time"
)

type MessageServer struct {
	messageCh chan string
	quitCh    chan struct{}
}

func NewMessageServer() *MessageServer {
	return &MessageServer{
		quitCh:    make(chan struct{}),
		messageCh: make(chan string, 100),
	}
}
func sendMessage(s *MessageServer, message string, numbers int) {
	for i := 0; i < numbers; i++ {
		s.messageCh <- fmt.Sprintf("msg: %s,%d", message, i)
	}
}
func (s *MessageServer) handleMessage(message string) {
	fmt.Println("handle messsage", message)
}
func (s *MessageServer) quit() {
	s.quitCh <- struct{}{}
}

// loop 死循环 工作循环
func (s *MessageServer) work() {
messsageLoop:
	for {
		select {
		case message := <-s.messageCh:
			s.handleMessage(message)
		case <-s.quitCh:
			fmt.Println("quit:")
			break messsageLoop
		default:
		}
	}

}

func main() {
	s := NewMessageServer()
	go func() {
		time.Sleep(time.Second * 3)
		s.quit()
	}()
	sendMessage(s, "hhh", 10)
	s.work()
	// time.Sleep(time.Second * 3)
}
