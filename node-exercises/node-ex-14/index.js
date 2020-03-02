const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.status(200).sendFile(path.join(__dirname, './index.html'));
});

app.get('/products', function(req, res){
   res.status(500).sendFile(path.join(__dirname, './500.html'))
});

app.get('/users', function(req, res){
    res.status(400).sendFile(path.join(__dirname, './404.html'))
 });


// ERROR

// app.use(function(err, req, res, next){
//     console.error(err.stack)
//     res.status(500).sendFile(path.join(__dirname, './500.html'))
// });

//404
//  app.use(function (req, res, next) {
//     res.status(404).sendFile(path.join(__dirname, './404.html'))
// });

app.listen(3000, function() {
    console.log('Jarvis listening on port 3000!');
  });