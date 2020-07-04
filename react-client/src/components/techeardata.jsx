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
  constructor (){
    super();
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
<div>
  <div style={h1}>
        {data.map(function(d, idx){
           return (
             <ul style={h5} key={d._id}>
             <h1 style={h3}>{d.name}</h1>
             {/* <p style={h3}>{d.phone}</p> */}
             <p style={h3}>{d.price}</p>
             {/* <p style={h3}>{d.email}</p> */}
             <p style={h3}>{d.subject}</p>
             <p style={h3}>{d.description}</p>
             <button style={h4} > <Link to="/studentf">
             book</Link></button>
             </ul>

              )
         })}

        </div>
        <div>
        <Link to="/student">   <button style={h6}className="Button1">Esc</button></Link>
         </div>
</div>

      );
    }
}
const h1={
  borderRadius: "5px",
 backgroundColor: "#F2F2F2",
 padding: "20px",
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
}
const h3={
 "margin-top":" 50px",
 "margin-left":" 50px",
}
const h4={
background: '#34D981',
backgroundImage: '-webkit-linear-gradient(top, #34D981, #2980B9)',
backgroundImage:" -moz-linear-gradient(top, #34D981, #2980B9)",
backgroundImage: "-ms-linear-gradient(top, #34D981, #2980B9)",
backgroundImage:" -o-linear-gradient(top, #34D981, #2980B9)",
backgroundImage: "linear-gradient(to bottom, #34D981, #2980B9)",
webkitBorderRadius: "60",
mozBorderRadius: "60",
borderRadius: "60px",
textShadow: "3px 1px 3px #00D16C",
fontFamily: "Courier New",
color:" #FFFFFF",
fontSize: "41px",
padding:" 10px 40px 8px 40px",
textDecoration:" none",
 background:" #3CB0FD",
backgroundImage:" -webkit-linear-gradient(top, #3CB0FD, #3498DB)",
backgroundImage:" -moz-linear-gradient(top, #3CB0FD, #3498DB)",
backgroundImage: "-ms-linear-gradient(top, #3CB0FD, #3498DB)",
backgroundImage: "-o-linear-gradient(top, #3CB0FD, #3498DB)",
backgroundImage: "linear-gradient(to bottom, #3CB0FD, #3498DB)",
marginTop:" 50px",
"marginLeft*-":" 24%",
textDecoration: "none"
}

const h6={
  backfaceVisibility: "hidden",
    position: "absolute",
    cursor: "cursor",
    display: "inline-block",
    whiteSpace: "nowrap",
    background: "#FFFFFF",
    borderRadius: "10px",
    border: "1px solid #1D606C",
    borderWidth: "1px 1px 1px 1px",
    padding: "10px 20px 10px 20px",
    boxShadow: "inset 0px 1px 0px rgba(255,255,255,1),0px 1px 3px rgba(0,0,0,0.3)",
    fontSize: "20px",
    fontFamily: "cursive",
    fontWeight: "900",
    fontStyle: "italic",
    textShadow: "0px -1px 0px rgba(0,0,0,0.4)",
    top: "20%",
    left: "10%",
    transform:" translate(-50%, -50%)"
    }