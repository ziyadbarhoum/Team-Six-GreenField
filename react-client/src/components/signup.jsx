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
        let target = e.target;
        let name = target.name;
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
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="Form1">
                <label className="Label1" htmlFor="email">Email</label>
                <input type="text" id="name" className="Input1" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="Form1">
                <label className="Label1" htmlFor="password">Password</label>
                <input type="password" id="password" className="Input1" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="Form1">
                  <button className="Button1">
                  <Link to="/SignUpform" type="submit">SignUp</Link>
                  </button>
                   <Link to="/loginform" className="Link1">I'm already member</Link>

              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;







