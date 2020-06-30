var express = require('express');
var bodyParser = require('body-parser');
var handlers = require('./handlres.js')

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
const log = console.log;

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/signup', handlers.signup);
app.post('/login', handlers.login)
app.post('/ret', handlers.showTeachers)
app.post('/mainForm', handlers.addTeacher)
app.post('/findOne', handlers.showSpecificTeacher)
app.get('/', (req, res) => {
  res.status(200).send('Success');
});




require('dotenv').config();


// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:  'alzuotorieb9999@gmail.com', // TODO: your gmail account 
        pass: 'orieb2004' // TODO: your gmail password
    }
});

// Step 2
transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: './views'
}));


// Step 3
let mailOptions = {
    from: 'alzuotorieb9999@gmail.com', // TODO: email sender
    to: 'blackmak21@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    template: 'index',
    context: {
        name: 'Accime Esterling'
    } // send extra values to template
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log(err);
    }
    return log('Email sent!!!');
});




app.listen(3110, function() {
  console.log('listening on port 3110!');
});