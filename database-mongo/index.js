var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teachersDataBase');
var Schema= mongoose.Schema
var db = mongoose.connection;
db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const authoSchema =new Schema({

  email: {type: String,
      required: true,
      unique: true,
      minlength: 3,
  },
  password:{type: String,
      required: true,
       minlength: 8
  }
});

var teacherSchema= new Schema({
      phoneNum : Number,
      name : { type: String, required: true, unique: true },
      price :{ type: String, required: true},
      Email :{ type: String, index: true, unique: true, required: true },
      Discription:String,
      place:{ type: String, required: true, unique: true },
      subject:{ type: String, required: true, unique: true }
  });

const Teacher = mongoose.model('Teacher', teacherSchema);
const Autho = mongoose.model('Autho', authoSchema);
//select all from teachers
var selectAllfromTeacher = function() {
Teacher.find(function (err, data) {
  if (err) return console.error(err);
  console.log( data[0]._doc.name)

})
};
//select all from Autho
var selectAllfromAutho = function() {
Autho.find(function (err, data) {
  if (err) return console.error(err);
  console.log( data[0]._doc.name)

})
};
// insert into autho schema 
var insertIntoAutho = function(instanse) {
  // console.log(db.base.modelSchemas.Autho)
    Autho.create(instanse, function (err, res) {
          if (err) {
            console.log('could not insert')
            throw err
          }
          console.log('inserted account')
          Autho.close()
        })
};
// insert into Teacher schema 
var insertIntoTeacher = function(instanse) {
  Teacher.create(instanse, function (err, res) {
          if (err) {
            console.log('could not insert')
            throw err
          }
          console.log('inserted account')
          Teacher.close()
        })
};


module.exports.Autho  = Autho;
module.exports.Teacher = Teacher;

module.exports.insertIntoAutho = insertIntoAutho;
module.exports.insertIntoTeacher = insertIntoTeacher;
module.exports.selectAllfromTeacher = selectAllfromTeacher;
