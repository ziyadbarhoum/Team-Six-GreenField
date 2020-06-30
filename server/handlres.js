var jwt = require('jsonwebtoken');

var mongoose=require('mongoose')
mongoose.Promise = global.Promise;

// import encrypt lib
var bcrypt = require("bcrypt");
var saltRounds = 10;
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
}
}


