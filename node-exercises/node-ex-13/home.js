let express = require('express');
let router = express.Router();

router.get('/', function(req, res){
    res.send(`This is my Home page using Express Router`);
});

module.exports = router;