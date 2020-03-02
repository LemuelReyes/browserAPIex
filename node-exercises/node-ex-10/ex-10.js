const express = require('express')
const app = express()
const randomJoke = require('./oneliner.js')

app.get('/', function(req, res){
    console.log(req.url)
    res.end(`Hello Lemuel, this is Jarvis. How may I be of assistance today?`)
});

app.listen(3000, function() {
    console.log(`Jarvis is online`)
});

// 1 joke

app.get('/joke', function(req, res) { 
    res.send(`${randomJoke.body}`)    
});

// 2 jokes

app.get('/jokes', function(req, res) {
    res.send(`${randomJoke.body}`)
});

app.post('/joke', function(req, res){
    res.send(`my jokes are too funny, I'm not getting new ones from you..`)
});

app.put('/joke', function(req, res){
    res.send(`no, no, no.. not changing my act dude!`)
});

app.delete('/joke', function(req, res){
    res.send(`good jokes never get to old`)
});

app.all('/joke', function(req, res){
    res.send(`I know I'm so good that you're looking for jokes everywhere`)
});