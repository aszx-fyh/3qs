package main

import (
	"encoding/json"
	"fmt"
)

// func main() {
// 	type Movie struct {
// 		Title  string
// 		Year   int  `json:"released"`
// 		Color  bool `json:"color,omitempty"`
// 		Actors []string
// 	}

// 	var movies = []Movie{
// 		{Title: "Casablanca", Year: 1942, Color: false,
// 			Actors: []string{"Humphrey Bogart", "Ingrid Bergman"}},
// 		{Title: "Cool Hand Luke", Year: 1967, Color: true,
// 			Actors: []string{"Paul Newman"}},
// 		{Title: "Bullitt", Year: 1968, Color: true,
// 			Actors: []string{"Steve McQueen", "Jacqueline Bisset"}},
// 		// ...
// 	}
// 	data, err := json.Marshal(movies)
// 	if err != nil {
// 		log.Fatalf("JSON marshaling failed: %s", err)
// 	}
// 	fmt.Printf("%s\n", data)
// 	data1, err := json.MarshalIndent(movies, "__", "    ")
// 	if err != nil {
// 		log.Fatalf("JSON marshaling failed: %s", err)
// 	}
// 	fmt.Printf("%s\n", data1)
// 	var titles []struct{ Title string }
// 	if err := json.Unmarshal(data, &titles); err != nil {
// 		log.Fatalf("JSON unmarshaling failed: %s", err)
// 	}
// 	fmt.Println(titles) // "[{Casablanca} {Cool Hand Luke} {Bullitt}]"

// }

type peerInfo struct {
	HTTPPort int `json:"http_port"`
	TCPPort  int `json:"tcp_port"`
	versiong string
}

func main() {
	pi := peerInfo{80, 3306, "0.0.1"}
	js, err := json.Marshal(pi)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(string(js))
	jsonToGo()
}

func jsonToGo() {
	var v peerInfo
	data := []byte(`{"http_port":80,"tcp_port":3306,versiong:"0.4.2"}`)
	err := json.Unmarshal(data, &v)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("%+v\n", v)
}
