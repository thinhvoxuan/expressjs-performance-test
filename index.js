'use strict'

var express = require('express');
var app = express();
var cache = require('express-redis-cache')({
   host: "localhost",
   port: 6379,
   expire: 2
 });

app.get('/', cache.route(), (req, res) => {
  setTimeout(function(){
    res.json({
      "data": "nothing"
    })
  }, 3000)
})

app.get('/user/:id', cache.route(), (req, res) => {
    if (req.params.id == 1) {
      res.json({ id: 1, name: "John"})
    } else if (req.params.id == 2) {
      res.json({ id: 2, name: "Bob"})
    } else if (req.params.id == 3) {
      res.json({ id: 3, name: "Stuart"})
    }
})

app.use((req, res) => {
  res.status(404).send('') //not found
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
