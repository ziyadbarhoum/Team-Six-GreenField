var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teachersDataBase');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var obj1={
  email:"defult@sura.com",
  password:"defult"
}


var obj2={
  phoneNum : 123,
      name : "String" ,
      price :1,
      Email :"String@",
      Discription:String,
      place:"String",
      subject:"String"
}

const authoSchema =mongoose.Schema({

  email: {type: String,
      required: true,
      unique: true,
      minlength: 5
  },
  password:{type: String,
      required: true,
       minlength: 8
  }
});

// var teacherSchema= mongoose.Schema({
//       phoneNum : Number,
//       name : { type: String, required: true, unique: true },
//       price :{ type: String, required: true},
//       Email :{ type: String, index: true, unique: true, required: true },
//       Discription:String,
//       place:{ type: String, required: true, unique: true },
//       subject:{ type: String, required: true, unique: true }
//   });

const Teacher = mongoose.model('Teacher', teacherSchema);
const Autho = mongoose.model('Autho', authoSchema);
//select all from teachers
var selectAllfromTeacher = function(callback) {
  Teacher.find({}, function(err, teachers) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, teachers);
    }
  });
};
// insert into autho schema 
var insertIntoAutho = function(callback) {
  Autho.insertOne(obj1, function(err, data) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};
// insert into Teacher schema 
var insertIntoTeacher = function(callback) {
  Teacher.insertOne(obj2, function(err, data) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};





module.exports.insertIntoAutho = insertIntoAutho;
module.exports.insertIntoTeacher = insertIntoTeacher;
module.exports.selectAllfromTeacher = selectAllfromTeacher;
