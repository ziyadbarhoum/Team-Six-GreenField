import React, { Component } from 'react';
class Failed extends Component {
    constructor() {
        super();
    }
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>

          <div className="Form1">
          <button className="Button1">Home</button>
      </div>
    </form>
  </div>
        );
    }
}
export default Failed;