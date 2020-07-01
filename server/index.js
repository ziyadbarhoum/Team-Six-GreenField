var express = require('express');
var bodyParser = require('body-parser');
var handlers = require('./handlres.js')

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/signup', handlers.signup);
app.post('/login', handlers.login)
app.post('/ret', handlers.showTeachers)
app.post('/mainForm', handlers.addTeacher)
app.post('/findOne', handlers.showSpecificTeacher)
app.post('/sendemail', handlers.sendEmail)
app.post('/logout', handlers.logout)

app.get('/', (req, res) => {
  res.status(200).send('Success');
});






app.listen(3111, function() {
  console.log('listening on port 3111!');
});