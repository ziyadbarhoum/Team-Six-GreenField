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
        <div>
        {teacherdata.map(function(d, idx){
           return (<li key={idx}>{d.name}</li>
              )
         })}
        </div>
      );
    }
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
