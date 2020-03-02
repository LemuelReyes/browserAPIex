let express = require('express')
let app = express()
let path = require('path')

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/products', function(req, res){
    res.sendFile(path.join(__dirname, 'products.html'))
})

app.listen(3000, function(req, res){
    console.log(`App is running on ${3000}. Jarvis ready.`)
})