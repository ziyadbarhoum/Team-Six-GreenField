
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

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form >
        <label>
        City:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Amman">Amman</option>
            <option value="Karak">Karak</option>
            <option value="Zarqa">Zarqa</option>
            <option value="Irbid">Irbid</option>
          </select>

        </label> <br/>
        <label>
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


      <button ><Link to="/view">View</Link></button>



    )
  }
}