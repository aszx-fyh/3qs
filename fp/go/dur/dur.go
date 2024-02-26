package dur

import "time"

// 以基础类型为基类型封装自定义类型
type Dur time.Time

func NewDur(t time.Time) Dur {
	return Dur(t)
}

func (s *Dur) ToTime() time.Time {
	return time.Time(*s)
}

func (s *Dur) Between() bool {
	return s.ToTime().Before(time.Now())
}

func Exec() {
	s := NewDur(time.Now())
	s.Between()
}
