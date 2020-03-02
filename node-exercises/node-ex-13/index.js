const express = require('express')
const app = express()

// Routers 
const home = require('./home.js');
const user = require('./user.js')

// App

app.use('/', home);
app.use('/user', user);

app.listen(3000, function(req, res){
    console.log(`Jarvis is online`)
})