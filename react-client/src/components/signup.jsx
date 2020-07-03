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
class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
      let {name, value} = e.target;
      this.setState({
        [name]: value
      });
  }

    handleSubmit(e) {
      e.preventDefault();
      const newstudent= {
        email: this.state.email,
        password: this.state.password

      };
      console.log(newRow)
  axios.post('http://localhost:9000/signup', newstudent)
  .then((res) => {
      console.log(res.data)
  }).catch((error) => {
      console.log(error)
  });

}
    render() {
        return (
          <div className="FormCenter" style={h1}>
          <form className="FormFields" method="POST"  action='/signup'>
            <div  className="form-group" style={h3} >
              <label>E-mail Address : </label>
              <input  style={h2} type="text"  placeholder="Enter your Email" name='email' />
            </div>
            <div style={h3}>
              <label >Password :</label>
              <input style={h2} type="password"  placeholder="Enter your password" name="password" />
            </div>
            <div >
            <button style={h4}  className="Button1" type='submit' value='sign up'> <Link to="/SignUpform">SignUp</Link></button>
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







