import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default class First extends React.Component {
  constructor (props){
    super(props);

  }

  render() {

var teacherdata=[
  {
    "_id":"5efb6f9e9f0fce0de806db38","phoneNum":77,"name":"majeda","price":"123","Email":"majeda@majeda.m","Discription":"hmb","__v":0,"create_date":"2020-06-30T17:00:14.480Z"
  },
{
  "_id":"5efb6ff6c7f95f18285a15e8","phoneNum":552,"name":"ali","price":"1","Email":"aloqailysura5@gmail.com","Discription":"ZKHJN","__v":0,"create_date":"2020-06-30T17:01:42.135Z"
},
{
  "_id":"5efb7009c7f95f18285a15ea","phoneNum":5,"name":"j","price":"6","Email":"aloqailysura@gmail.com","Discription":"j","__v":0,"create_date":"2020-06-30T17:02:01.921Z"
},
{
  "_id":"5efb707dae46ab03a4f19d30","phoneNum":99999,"name":"xxzz","price":"55","Email":"aloqailysura@gmail.comfgnf","Discription":"gfhn","place":"xxx","subject":"xx","__v":0,"create_date":"2020-06-30T17:03:57.056Z"
},
{
  "_id":"5efb709cae46ab03a4f19d32","phoneNum":545,"name":"hvhm","price":"8","Email":"aloqailysura@g.htfgyhjk","Discription":"h","place":"xxx","subject":"xx","__v":0,"create_date":"2020-06-30T17:04:28.383Z"
},
{
  "_id":"5efb72c7d8c29c1f48467228","phoneNum":54567890,"name":"hvhmvbnm,","price":"845678","Email":"aloqailysura@g.htfgyhjkmjnhjbg","Discription":"h45678","place":"xxx","subject":"xx","__v":0,"create_date":"2020-06-30T17:13:43.199Z"
},
{
  "_id":"5efb7353cfb7b01664e57993","phoneNum":45678,"name":"34567890","price":"34567890","Email":"aloqailysdura@ytyyyyygmail.com","Discription":"orieb","place":"xxx","subject":"xx","__v":0,"create_date":"2020-06-30T17:16:03.044Z"
}
];


return (
  <div style={h1}>
        {teacherdata.map(function(d, idx){
           return (
             <ul style={h5}>
             <p style={h3}>{d.name}</p>
             <p style={h3}>{d.phoneNum}</p>
             <p style={h3}>{d.price}</p>
             <p style={h3}>{d.Email}</p>
             <p style={h3}>{d.subject}</p>
             <p style={h3}>{d.Discription}</p>
             <button style={h3} ><Link to="/studentf">book</Link></button>
             </ul>
              )
         })}
        </div>
  
      );
    }
  }
  const h1={
    "border-radius": "5px",
   "background-color": "#F2F2F2",
   "padding": "20px",
   cursor: "cursor",
   display: "inline-block",
   background: "#FFFFFF",
   border: "1px solid #1D606C",
   borderWidth: "1px 1px 1px 1px",
     borderRadius: "10px",
   padding: "10px 20px 10px 20px",
   fontSize: "20px",
   fontFamily: "cursive",
   fontWeight: "900",
   fontStyle: "italic",
   textShadow: "0px -1px 0px rgba(0,0,0,0.4)",
   position: "absolute",
   top: "35%",
   left: "35%",
 }
  const h5={
    background: "#FFFFFF",
   border: "1px solid #1D606C",
   borderWidth: "1px 1px 1px 1px",
   borderRadius: "10px",
   "padding":"5px",
   "margin-left":" 25px",
    position:"center",
 backgroundImage: 'url(https://www.mylaps.com/app/uploads/2016/05/mylaps-background-image.jpg)',
 }
 const h3={
   "margin-top":" 50px",
   "margin-left":" 50px",
 }


// var teachers={techeardata};
// var teacherTable = (props) => (
//   <table>
//     <tbody>
//     {props.teacherdata.map((teacher) =>
//         <TecheardataRow teacher={teacher} />)}
//     </tbody>
//   </table>
// );

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// teacherTable.propTypes = {
//   teacherdata: React.PropTypes.array.isRequired
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.teacherTable = teacherTable;