var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var techear= new schema({
      phoneNum : Number,
      name : { type: String, required: true, unique: true },
      price :{ type: String, required: true},
      Email :{ type: String, index: true, unique: true, required: true },
      Discription:String,
      place:{ type: String, required: true, unique: true },
      subject:{ type: String, required: true, unique: true }
  });

var Item = mongoose.model('Item', itemSchema);

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