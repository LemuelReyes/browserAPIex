let express = require('express')
let app = express()
 
app.get('/', function(req,res){
    res.end(`<h1>Hello there</h1>`)
});

app.get('/api/products', function(req, res){
    res.json({
        description: 'Products',
        items: [
          { name: 'Star Wars jacket' , price: 100},
          { name: 'FIFA 22 PS4' , price: 79},
          { name: 'Superheore t-shirt' , price: 10},
          { name: 'Jets game shirt' , price: 200},
          { name: 'Large Meat lovers pizza' , price: 12},
          { name: 'Canada Dry  bottle' , price: 2}
        ]
      })
});

app.listen(3000, function(req, res){
    console.log(`Jarvis is online. Communicating with Jarvis on ${3000}`)
});