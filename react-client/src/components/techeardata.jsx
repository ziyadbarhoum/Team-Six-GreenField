import React, { Component } from 'react';
import axios from "axios";

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
this.state= {
  techeardata:[]
}
  }
  componentDidMount(){
    var x = this;
    axios.get('http://localhost:9000/findOne')
    .then((res) => {
      this.setState({techeardata:res.data})
        console.log(res.data)
    }).catch((error) => {
        console.log(error)
    });
  }
    render() {
      const data=this.state.techeardata;
      console.log(data)
return (
  // var data =this.state.teacherdata;
  <div style={h1}>
        {data.map(function(d, idx){
           return (
             <ul style={h5} key={d._id}>
             <p style={h3}>{d.name}</p>
             <p style={h3}>{d.phone}</p>
             <p style={h3}>{d.price}</p>
             <p style={h3}>{d.email}</p>
             <p style={h3}>{d.subject}</p>
             <p style={h3}>{d.description}</p>
             <button style={h3} > <Link to="/studentf">
             book</Link></button>
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