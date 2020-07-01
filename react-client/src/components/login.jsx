import React, { Component } from 'react';
import TeacherForm from './formData.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"
  export default  class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
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
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    render() {
        return (
        <div className="FormCenter">
            <form method='POST' action ='/login'>
            <div className="Form1">
                <label className="Label1" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="Input1" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="Form1">
                <label className="Label1" htmlFor="password">Password</label>
                <input type="password" id="password" className="Input1" placeholder="Enter your password" name="password" />
              </div>
              <Router>
                <div>

              <div className="Form1">
                  <button className="Button1" type='submit' value='login'> <Link to="/loginform">Login</Link></button>
              </div>

              <Switch>
          <Route path="/loginform">
            <TeacherForm/>
          </Route>

        </Switch>
      </div>
    </Router>
            </form>
          </div>
        );
    }
}

