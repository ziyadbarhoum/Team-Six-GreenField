var jwt = require('jsonwebtoken');
var items = require('../database-mongo');

var Autho = items.Autho;
var Teacher=items.Teacher;
var mongoose=require('mongoose')
mongoose.Promise = global.Promise;
var bcrypt = require("bcrypt");

module.exports = {
	signup: function (req, res)  {
bcrypt.hash(req.body.password,10,(err,hash)=>{
		if(err){
			return res.status(500).json({
				error:err
			})
		} else{
  var newUser = new Autho({
    email: req.body.email,
    password:hash
  });
   newUser
    .save()
    .then( () => {
    	console.log(newUser)
      res.status(200).send(newUser);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    }
    )
}
},

login:function (req, res) {
  var newUser = {};
  newUser.email = req.body.email;
  newUser.password = req.body.password;

   Autho.findOne({ email: newUser.email })
    .then(profile => {
      if (!profile) {
        res.send("User not exist");
      } else {
        if (profile.password == newUser.password) {
          res.send("User authenticated");
        } else {
          res.send("User Unauthorized Access");
        }
      }
    })
     .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
}
}
