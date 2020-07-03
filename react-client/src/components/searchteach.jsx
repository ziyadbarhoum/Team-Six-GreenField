
import React, { Component } from 'react';
import First from './techeardata.jsx';


import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default class SearchTe extends React.Component {
  render () {
    return (
    <div>
    <Search1/>
    <View1/>

 </div>);
  }
}
class Search1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: 'Amman'};

    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    });
}

  render() {
    return (
      <form style={h1}>
        <label style={h3}>
        City:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Amman">Amman</option>
            <option value="Karak">Karak</option>
            <option value="Zarqa">Zarqa</option>
            <option value="Irbid">Irbid</option>
          </select>
        </label> <br/>
        <label style={h3}>
      Subject:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="Science">Science</option>
          </select>
        </label>
      </form>

    );
  }
}


class View1 extends React.Component{
  render(){
    return(


      <button style={h4} ><Link to="/view">View</Link></button>



    )
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
 left: "40%",
}
const h2={
      "font-size": "16px",
       "border-radius":"5px",
           "background": "#F9F1F7",
           "border":"#000000",
           "padding": "10px",
}
const h3={
   "margin": "20%",
    top: "40%",
    left: "50%",
    color:"#6D93BA"
}
const h4={
 color:"#D64C4C",
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
 top: "80%",
 left: "45%",
}