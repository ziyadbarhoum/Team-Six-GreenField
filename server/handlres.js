var jwt = require('jsonwebtoken');
var items = require('../database-mongo');
var Autho = items.Autho;
var Teacher=items.Teacher;
var mongoose=require('mongoose')
mongoose.Promise = global.Promise;
var bcrypt = require("bcrypt");
var saltRounds = 10;
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
                res.status(200).send(newUser);
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
}
}