const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  let pathName = req.url;
  if (pathName === "/overview" || pathName === "/") {
    res.end("this is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Path not found!</h1>");
  }
});

server.listen(3000, () => {
  console.log("server started");
});
