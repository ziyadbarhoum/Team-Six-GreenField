var express = require('express');
var bodyParser = require('body-parser');
var handlers = require('./handlres.js')
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));
app.post('/signup', handlers.signup);
app.post('/login', handlers.login)
app.get("/", (req, res) => {
  res.status(200).send(`Success `);
});
app.listen(3110, function() {
  console.log('listening on port 3110!');
});
// var mongoose= require('mongoose')
// mongoose.Promise = global.Promise;
// var bodyParser = require('body-parser');
// var router =express.Router()
// var bcrypt = require("bcrypt");
// app.use(express.static(__dirname + '/../react-client/dist'));
// app.use(bodyParser.urlencoded({	extended:true}));
// app.use(bodyParser.json())
// app.post("/", (req, res, next) => {
//   Autho.find({ email: req.body.email })
//     .exec()
//     .then(user => {
//       if (user.length >= 1) {
//         return res.status(409).json({
//           message: "Mail exists"
//         });
//       } else {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           if (err) {
//             return res.status(500).json({
//               error: err
//             });
//           } else {
//             const user = new Autho({
//               _id: new mongoose.Types.ObjectId(),
//               email: req.body.email,
//               password: hash
//             });
//             user
//               .save()
//               .then(result => {
//                 console.log(result);
//                 res.status(201).json({
//                   message: "User created"
//                 });
//               })
//               .catch(err => {
//                 console.log(err);
//                 res.status(500).json({
//                   error: err
//                 });
//               });
//           }
//         });
//       }
//     });
// });
// // app.post("/login",(req,res,next)=>{
// // 	console.log(req.body)
// // })
// module.exports = router;
//    Autho.find({email:req.body.email})
//    .exec()
//    .then(autho=>{
//       if (autho.length<1){
//          return res.status(401).json({
//             message:"Autho faild"
//          })
//       }
//       console.log(Object.keys(Autho) )
//       console.log(Autho.schema.paths.password)
//       bcrypt.compare(req.body.password, Autho[0].password ,(err,result)=>{
//          if (err){
//             return res.status(401).json({
//                message:"Autho faild"
//             })
//          }
//          if (result){
//             return res.status(200).json({
//                message:"Autho Successful"
//             })
//          }
//          res.status(401).json({
//             message:"Autho failed"
//          })
//       })
//    })
//    .catch(err=>{
//       console.log(err)
//       res.status(500).json({
//          error:err
//       })
//    })
// })