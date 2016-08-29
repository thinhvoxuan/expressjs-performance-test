'use strict'

var express = require('express');
var app = express();
var cache = require('express-redis-cache')({
   host: "localhost",
   port: 6379,
   expire: 2
 });

 app.get('/', (req, res) => {
     res.json({
       "title": "Cam tam Cali",
       "text": "uploads/1467643336375.jpg Re etcig jisiboj sijgeziz ben li ci rihiskav mud ilkop jeavaja ve cuobsa zog nadla ecranrig.",
       "restaurant": {
         "location": {
           "address": "Khang Kentucky",
           "city": "Panwnee",
           "country": "US",
           "state": "CA",
           "zip": "21030",
           "latitude": "36.482036",
           "longitude": "-84.726563"
         },
         "name": "Khal Restaurant"
       },
       "photo": "{{s3file}}",
       "rating": 3,
       "pricing": 1,
       "categories": [1, 2, 5],
       "collections": ["bce4b769-224a-4dc0-9abb-37f8ecb4be26"]
     })
 })

 app.get('/returnWithCache', cache.route(), (req, res) => {
     res.json({
       "title": "Cam tam Cali",
       "text": "uploads/1467643336375.jpg Re etcig jisiboj sijgeziz ben li ci rihiskav mud ilkop jeavaja ve cuobsa zog nadla ecranrig.",
       "restaurant": {
         "location": {
           "address": "Khang Kentucky",
           "city": "Panwnee",
           "country": "US",
           "state": "CA",
           "zip": "21030",
           "latitude": "36.482036",
           "longitude": "-84.726563"
         },
         "name": "Khal Restaurant"
       },
       "photo": "{{s3file}}",
       "rating": 3,
       "pricing": 1,
       "categories": [1, 2, 5],
       "collections": ["bce4b769-224a-4dc0-9abb-37f8ecb4be26"]
     })
 })

app.get('/longReturnWithCache', cache.route(), (req, res) => {
  setTimeout(function(){
    res.json({
      "title": "Cam tam Cali",
      "text": "uploads/1467643336375.jpg Re etcig jisiboj sijgeziz ben li ci rihiskav mud ilkop jeavaja ve cuobsa zog nadla ecranrig.",
      "restaurant": {
        "location": {
          "address": "Khang Kentucky",
          "city": "Panwnee",
          "country": "US",
          "state": "CA",
          "zip": "21030",
          "latitude": "36.482036",
          "longitude": "-84.726563"
        },
        "name": "Khal Restaurant"
      },
      "photo": "{{s3file}}",
      "rating": 3,
      "pricing": 1,
      "categories": [1, 2, 5],
      "collections": ["bce4b769-224a-4dc0-9abb-37f8ecb4be26"]
    })
  }, 5000)
})

app.use((req, res) => {
  res.status(404).send('') //not found
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
