var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const teacherSchema = new Schema({

  email: {type: String,
      required: true,
      unique: true,
      minlength: 5
  },
  password:{type: String,
      required: true,
       minlength: 8
  });


const Teacher = mongoose.model('Teacher', teacherSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
