var express = require('express');

var app = express();

var mongoose= require('mongoose')

var bodyParser = require('body-parser');

var items = require('../database-mongo');

var router =express.Router()

var bcrypt = require("bcrypt");

var Autho= items.Autho

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({	extended:true}));
app.use(bodyParser.json())


app.post('/',(req,res,next)=>{
	bcrypt.hash(req.body.password,10,(err,hash)=>{
		if(err){
			return res.status(500).json({
				error:err
			})
		} else{
			const teacher = new Autho({
				_id: new  mongoose.Types.ObjectId(),
				email:req.body.email,
				password:hash
			});
			teacher
			.save()
			.then(result=>{
				console.log(result)
				res.status(201).json({
					message:'User created'
				});
				// res.render('/login')
			})
			.catch(err=>{
				console.log(err);
				res.status(500).json({
					error:err
				})
			})
		}
	})
})

app.listen(3110, function() {
  console.log('listening on port 3110!');
});
module.exports = router;

