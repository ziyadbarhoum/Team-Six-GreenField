import React, { Component } from 'react';
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
      <div>
        <button onClick="techerfun()">TEACHER</button>
      <button onClick="studentfun()">STUDENT</button>
      </div>
    )
  }
}



