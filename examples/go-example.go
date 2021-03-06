package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://localhost:14801/graphql"

	payload := strings.NewReader("{\n\t\"query\":\"query($criteria:String!){search(criteria:$criteria){criteria,timestamp,totalRecords,resultSet{name,source,type,url}}}\",\n\t\"variables\":{\n\t\t\"criteria\":\"The Island of Lost Dreams\"\n\t}\n}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("cache-control", "no-cache")
	req.Header.Add("Postman-Token", "b40d00d3-de58-46d2-8f24-6ed22350e2f8")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
