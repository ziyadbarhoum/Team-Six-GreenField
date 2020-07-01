import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import SearchPage from './components/search.jsx';
import SignInSignUpForm from './components/authentication.jsx';

export default class App extends React.Component {
  render () {
    return (
    <div>
    <Header/>
    <Content/>
    </div>);
  }
}
class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>BOOK TEACHER </h1>
      </div>
    )
  }
}
class Content extends React.Component{
  render(){
    return(

<Router>
      <div>


        <button><Link to="/TEACHER">TEACHER</Link></button>
          <button><Link to="/STUDENT">STUDENT</Link></button>


        <Switch>
          <Route path="/TEACHER">
            <SignInSignUpForm/>
          </Route>
          <Route path="/STUDENT">
            <SearchPage/>
          </Route>

        </Switch>
      </div>
    </Router>


    )
  }
}

