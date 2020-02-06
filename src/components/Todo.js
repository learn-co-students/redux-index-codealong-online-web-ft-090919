import React, { Component } from "react";
import React from "react";
export default class Todo extends Component {
  render() {
    return (
      <div>
        <li>{this.props.text}</li>
      </div>
    );
  }
}

export default Todo;
