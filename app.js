var express = require('express');
var app = express();
require('dotenv').config();
var fs = require('fs');
var file = fs.readFileSync('./events.json')

var obj = JSON.parse(file);

// app.get('/', (req, res) => res.send('Home!'))
app.get('/:id', (req, res) =>{

	res.send(obj.filter(o => o._id['$oid'] == req.params.id))
	console.log(req.params)
})

 app.get('/', (req, res) =>{
 	res.send(obj.filter(o => o.aqm.r3000['$numberInt'] > 70 ))
  console.log(req.query.aqm)
 })
 
app.listen(process.env.PORT, () => console.log('Example app listening on port 3000!'))



 
   
 