package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"time"
)

func CreateFile(filenumber string, c chan string, closeChan bool) {
	time.Sleep(time.Second)
	cwd, _ := os.Getwd()

	err := os.MkdirAll("test", os.ModePerm)
	if err != nil {
		log.Fatal(err)
	}
	filename := fmt.Sprintf("test%s.txt", filenumber)
	path := filepath.Join(cwd, "test", filename)
	file, err := os.Create(path)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()
	c <- filename
	if closeChan {
		close(c)
	}
	fmt.Println("success!")
}

func main() {
	c := make(chan (string))
	go CreateFile("1", c, false)
	go CreateFile("2", c, false)
	go CreateFile("3", c, false)
	go CreateFile("4", c, false)
	go CreateFile("5", c, true)
	for msg := range c {
		fmt.Println(msg)
	}
	fmt.Println("DONE")
}
