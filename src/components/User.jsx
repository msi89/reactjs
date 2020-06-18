import React from "react";
import { connect } from "react-redux";
import { setName, setAge } from "../store/actions/user";

class User extends React.Component {
  handleChange(e) {
    if (e.target.name === "name") {
      this.props.setName(e.target.value);
    }
    if (e.target.name === "age") {
      this.props.setAge(e.target.value);
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="your name"
          name="name"
          value={this.props.user.name}
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="number"
          placeholder="your age"
          name="age"
          min="0"
          value={this.props.user.age}
          onChange={this.handleChange.bind(this)}
        />
        <h2>
          {this.props.user.name && `Hi ${this.props.user.name} `}
          {this.props.user.age > 0 && `, you are ${this.props.user.age} old.`}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer,
    counter: state.counterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    },
    setAge: age => {
      dispatch(setAge(age));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
