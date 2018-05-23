var express = require('express');
var app = express();
require('dotenv').config();
var fs = require('fs');
var file = fs.readFileSync(__dirname + '/events.json')

var obj = JSON.parse(file);

// app.get('/', (req, res) => res.send('Home!'))
app.get('/', (req, res) => {
	// console.log(/route)
    res.sendFile(__dirname + '/index.html');

})

app.get('/api/events', (req, res) => {
    // res.send(obj.filter(o => o.aqm.r3000['$numberInt'] > 70 ))
    res.send(obj)
    console.log(req.query.aqm)

})

app.get('/api/events/random', (req, res) => {
    console.log('route/api/events/random')
    res.send(obj[Math.floor(Math.random() * (obj.length - 0 + 1)) + 0])

})

app.get('/api/events/:id', (req, res) => {

    res.send(obj.filter(o => o._id['$oid'] == req.params.id))
    console.log(req.params)
})

app.get('*', (req, res) => {
    console.log('route /fallback');
    res.send('route not found')

})

app.listen(process.env.PORT, () => console.log('Example app listening on port 3000!'))