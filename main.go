package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/creedasaurus/govm/assembler"
	_ "github.com/creedasaurus/govm/vm"
	"github.com/gorilla/mux"
)

type test_struct struct {
	UnparsedCode string `json:"unparsed_code"`
}

func handler(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)
	var testThing test_struct
	err := json.NewDecoder(req.Body).Decode(&testThing)
	if err != nil {
		fmt.Errorf("wow %v", err)
	}
	fmt.Println(testThing)
	fmt.Println(params["unparsed_code"])
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/cool", handler).Methods("POST")
	args := os.Args[1:]
	fmt.Println(args)
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", router))
}
