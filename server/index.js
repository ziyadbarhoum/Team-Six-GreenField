var path=require("path")
//install express 
var express = require('express');
//app is instance from our express
var app = express();
// npm install body-parser
// middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({	extended:true}));
app.use(bodyParser.json())
var items = require('../database-mongo');

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.post('/',function (req, res) {
	console.log(req.body)
items.insertIntoAutho(req.body)
})
app.get('/', function (req, res) {
  // items.selectAllfromTeacher(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     console.log(data)
  //   }
  // });

 // console.log(items.selectAllfromTeacher()) 
});

app.listen(3110, function() {
  console.log('listening on port 3100!');
});

