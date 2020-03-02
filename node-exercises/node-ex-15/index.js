const express = require('express')
const app = express()

const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
    
    next();
};

app.use(requestTime);

app.get('/', function(req, res){
    
    res.json({
        "status": 200,
        "message": "Este request/response está OK"
    })
    
    const time = req.message;
    res.send(time)

});

app.listen(3000, function(req, res){
    console.log(`Jarvis online.`)
});


