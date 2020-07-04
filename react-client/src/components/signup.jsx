import React, { Component } from 'react';
import TeacherForm from './formData.jsx';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {Redirect} from 'react-router-dom';
class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.updateemail= this.updateemail.bind(this);
        this.updatePassword= this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    updateemail(evt) {
      this.setState({
        email : evt.target.value
      });
    }
    updatePassword(evt) {
    this.setState({
        password : evt.target.value
      });
    }
    handleSubmit(e) {
      console.log(this, 'I am from signup ')

      e.preventDefault();
      const newstudent= {
        email: this.state.email,
        password: this.state.password
      };
  axios.post('http://localhost:9000/signup', newstudent)
  .then((res) => {
    console.log(res.data);
    if(res.data === "User authenticated"){

      // return  <Redirect  to="/see" />
      console.log(this.props);
      this.props.history.push('/SignUpform')}else{
        alert(' TRY AGAIN!!!')
      }


  }).catch((error) => {

      console.log(error)
  });
}
    render() {
        return (
          <div className="sign" style={h1}>
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div  className="form-group" style={h3} >
              <label className="Form1" htmlFor="name">E-mail Address : </label>
              <input  style={h2} type="email"  placeholder="Enter your Email" name='email' value={this.state.email} onChange={this.updateemail}  />
            </div>
            <div  className="Form1" style={h3}>
            <label className="Label1" htmlFor="password">Password</label>
                <input  style={h2} type="password" id="password" className="Input1" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.updatePassword} />
            </div>
            <div >
            <button style={h4} type='submit'> signup</button>
            </div>
</form>
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
}
const h4={
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
 left: "35%",
}
export default SignUpForm;