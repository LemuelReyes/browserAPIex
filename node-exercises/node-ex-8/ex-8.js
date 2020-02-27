const http = require('http')
const port = 3001;

const requestHandler = (req, res) => {
    console.log(req.url)
    res.end(`Congrats you're using your first Node.js Web Server
    `);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if(err) {
        return console.log('Something bad happened')
    }

    console.log(`server is listening on ${port}`)
})