const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const {method, url} = req
  if(method == 'GET' && url == '/') {
    fs.readFile('./index.html', (err, data) => {
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  } else if(method == 'GET' && url == '/data') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify([{ name: "tom", age: 20 }]));
  }
})
server.listen(3000, () => {
  console.log(`服务器运行在 http://localhost:3000/`)
})