
var mongoose=require('mongoose')
mongoose.Promise = global.Promise;

// import encrypt lib
var bcrypt = require("bcrypt");
var saltRounds = 10;
// node mailer tosend email

const nodemailer = require('nodemailer');
const log = console.log;

// import models from DB

var items = require('../database-mongo');

var Autho = items.Autho;
var ADV=items.ADV;
// Handlers to handle req in express server
module.exports = {
	signup: function (req, res)  {
  var newUser = new Autho({
    email: req.body.email,
    password: req.body.password
  });
   Autho.findOne({ email: newUser.email })
    .then( profile => {
      if (!profile) {
        bcrypt.hash(newUser.password, saltRounds, function (err, hash)  {
          if (err) {
            console.log("Error is", err.message);
          } else {
            newUser.password = hash;
             newUser
              .save()
              .then(() => {
                res.redirect('/login');
              })
              .catch(err => {
                console.log("Error is ", err.message);
              });
          }
        });
      } else {
        res.send("User already exists...");
      }
    })
    .catch(err => {
      console.log("Error is", err.message);
    });
},
login:function (req, res)  {
  console.log(req.body)
  var newUser = {};
  newUser.email = req.body.email;
  newUser.password = req.body.password;
   Autho.findOne({ email: newUser.email })
    .then(profile => {
      if (!profile) {
        res.send("User not exist");
      } else {
        bcrypt.compare(
          newUser.password,
          profile.password,
          function (err, result) {
            if (err) {
              console.log("Error is", err.message);
            } else if (result == true) {
              res.send("User authenticated");
            } else {
              res.send("User Unauthorized Access");
            }
          }
        );
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });

},

  getAlldatafromAuthoSchema:function(req,res){
	 Autho.find({}, function(err, user){
      if(err){
        res.json(err);
      } else {
        res.json(user);
      }
    });
  },
  showTeachers: function(req, res)  {

		ADV.find(function(err, teachers)  {
			if(err){
				throw err;
			}
			res.json(teachers);
		});
	},
	 showSpecificTeacher: function(req, res)  {
       var toShow= req.body
		ADV.find(toShow,function(err, teachers)  {
			if(err){
				throw err;
			}
			res.json(teachers);
		});
	},

addTeacher:function(req,res){
	var phoneNum = req.body.phoneNum;
	var name = req.body.name;
	var price = req.body.price;
	var Email = req.body.Email;
	var Discription = req.body.Discription;
	var place = req.body.place;
	var subject = req.body.subject;
	const newAdv= new ADV({
		phoneNum,
		name,
		price,
		Email,
		Discription,
		place,
		subject
	})
	// Teacher.create(teacherInfo, function (err, teacher) {
	// 		if(err){
	// 			throw err;

	// 		}
	// 		res.json(teacher);
	// 	});
	// }
		newAdv.save()
		.then(()=> res.json("ADV Added"))
	    .catch(err=> res.status(400).json('Error:'+err))
},
sendEmail:function(req,res){

var username=req.body.userName
var email=req.body.email
var phoneNumber=req.body.phoneNumber

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bookteacheronline@gmail.com',
        pass:  'BookTeacherOnline123456789'
    }
});

// Step 2
let mailOptions = {
    from: email ,
    to: 'blackmak21@gmail.com',
    subject: 'There is Student want to contact you !!',
    text: 'Hi  there !! there is student intrested with you ADV \n please contact him/her \n Contact Informations : \n Name :'+ username+'\n Phone Number :' +phoneNumber +'\n Email :'+email
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        res.status(400).json('Error:'+err)
    }
    res.json("Email send");
});


}
}


