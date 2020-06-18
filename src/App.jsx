import React, { Component } from "react";
import "./styles.css";
import User from "./components/User";
import Counter from "./components/Counter";
import Increaser from "./components/Increaser";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Redux class Component</h3>
        <User />
        <hr />

        <h3>Redux Hooks: useReducer</h3>
        <Counter />
        <hr />

        <h3>Redux Hooks: useSelector and useDispatch</h3>
        <Increaser />
        <hr />
      </div>
    );
  }
}

export default App;
