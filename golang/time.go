package main

import (
	"fmt"
	"time"
)

func main() {
	timeStr := "15:20:05"
	timeTemplate1 := "15:04:05"
	time1, _ := time.ParseInLocation(timeTemplate1, timeStr, time.Local)
	fmt.Println(time1.Year())
	fmt.Println(time1.Format("2006-01-02 15:04:05"))

}
