import React, { Component } from 'react';
import SignUpForm from './signup.jsx';
import LoginForm from './login.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class SignInSignUpForm extends Component {
    constructor() {
        super();
    }
    render() {
        return (
          <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
        <div className="Form1">
        <button className="Button1" style={btn1}><Link to="/teacherForm">SIGNUP</Link></button>
        </div>
        <div className="Form1">
        <button className="Button1" style={btn2}><Link to="/LoginForm">LOGIN</Link></button>
    </div>
  </form>
</div>
        );
    }
}
var btn1={
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
  top: "50%",
  left: "45%",
  }
   var btn2={
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
  top: "60%",
  left:  "45%",
}
export default SignInSignUpForm;
