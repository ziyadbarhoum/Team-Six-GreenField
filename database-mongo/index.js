var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;


var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const userSchema = new Schema({
      name: {type: String,
      required: true,
      unique: true,
      minlength: 5
  },
  phone: {type: Number,
      required: true,
      unique: true,
      minlength: 10
  },
  email: {type: String,
      required: true,
      unique: true,
      minlength: 5
  },
  price:{type: Number,
      required: true,
  },
  subject: {type: String,
      required: true
  },
  city: {type: String,
      required: true}

  });

  const usernameSchema = new Schema({
    name: {type: String,
    required: true,
    unique: true,
    minlength: 5
    },
    password: {type: String,
    required: true,
    minlength: 8}

  });

  const User = mongoose.model('User', userSchema);
  const Username = mongoose.model('Username', usernameSchema)


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