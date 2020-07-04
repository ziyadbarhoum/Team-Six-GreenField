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
class Sucess extends Component {
    constructor() {
        super();
    }
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>

          <div className="Form1">
          <Link to="/see">   <button className="Button1">Home</button></Link>
      </div>
    </form>
  </div>
        );
    }
}
export default Sucess;