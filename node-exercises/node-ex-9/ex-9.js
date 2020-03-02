const express = require('express')
const app = express()
const Logger = require('logplease');
const logger = Logger.create('Jarvis');

app.get('/', function(request, response){
    response.send('Congrats youre using your first Node.js and Express as Web Server');
}); 

app.listen(3000, (err) => {

    if(err) {
        logger.error('Uhoh! something went wrong')
    }
        logger.info(`This HTTP server is running on port ${3000}
    `)
});