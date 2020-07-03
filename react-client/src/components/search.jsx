
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
  render () {
    return (
    <div>
    <Search/>
    <View/>

 </div>);
  }
}
class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: 'Amman'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    const newstudent= {
      City: this.state. City,
      Subject: this.stateSubject

    };
    axios.post('http://localhost:9000/loginform"', newstudent)
    .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error)
    });

  }
  render() {
    return (
      <form >
        <label>
        City:
        <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
          <select value={this.state.city} onChange={this.handleChange}>
            <option value="Amman">Amman</option>
            <option value="Karak">Karak</option>
            <option value="Zarqa">Zarqa</option>
            <option value="Irbid">Irbid</option>
          </select>
</form>
        </label> <br/>

        <label>
      Subject:
      <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
          <select value={this.state.Subject+
          3.} onChange={this.handleChange}>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="Science">Science</option>
          </select>
</form>
        </label>
      </form>

    );
  }
}


class View extends React.Component{
  render(){
    return(


      <button type="submit" ><Link to="/view">View</Link></button>



    )
  }
}