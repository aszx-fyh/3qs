package main

import "bytes"

func main1() string {
	var b bytes.Buffer
	str := "hhh"
	for true {
		b.WriteString(str) // 将字符串str写入缓存buffer
	}
	return b.String()
}
