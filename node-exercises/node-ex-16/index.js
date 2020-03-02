const express = require('express');
const app = express();
const path = require('path')

app.use('/assets', express.static(path.join(__dirname, './public')))

app.get('/', function(req, res){
    res.send(`Hello there`)
});

console.log(__dirname)

app.listen(3000, function(req, res){
    console.log(`Jarvis online.`)
});