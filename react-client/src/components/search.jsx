
import React, { Component } from 'react';
import axios from "axios";

import First from './techeardata.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default class SearchPage extends React.Component {

  constructor() {
    super();
    this.state = {
      place:'',
      Subject:'',
    };

    this.updatePlace= this.updatePlace.bind(this);
    this.updateSubject= this.updateSubject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  updatePlace(evt) {
    this.setState({
      place : evt.target.value
    });
  }
  updateSubject(evt) {
    this.setState({
      Subject : evt.target.value
    });
  }



  handleSubmit(e) {
    e.preventDefault();
    const datasp= {
      place: this.state.place,
      Subject: this.state.Subject

    };
    axios.post('http://localhost:9000/findOne"', datasp)
    .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error)
    });

  }
  render() {
    return (
      <form  style={h1}>
      <label style={h3}>
      City:
        <select name='place' value={this.state.place} onChange={this.updatePlace}>
          <option place="Amman">Amman</option>
          <option place="Karak">Karak</option>
          <option place="Zarqa">Zarqa</option>
          <option place="Irbid">Irbid</option>
        </select>
      </label> <br/>
      <label style={h3}>
    Subject:
        <select name='place' value={this.state.Subject} onChange={this.updateSubject}>
          <option Subject="Math">Math</option>
          <option Subject="English">English</option>
          <option Subject="Arabic">Arabic</option>
          <option Subject="Science">Science</option>
        </select>
      </label>

      <div >
            <button style={h4} type='submit'> <Link to="/view">View</Link></button>
            </div>


    </form>

    );
  }
}


// class View extends React.Component{
//   render(){
//     return(


//       <button  style={h4}><Link to="/view">View</Link></button>



//     )
//   }
// }
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