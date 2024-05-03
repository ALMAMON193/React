import React, { Component } from "react";
import Home from "./Home/homePage";
import Register from "./register/registerPage";

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    let elements;
    elements = isLoggedIn ? <Home /> : <Register />;
    return <div>{elements}</div>;
  }
}
