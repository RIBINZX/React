import React, { Component } from "react";
// import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "tets",
      password: "pass",
      displayname: "name",
    };
  }

  inputSet=(e)=>{

    this.setState({ [e.target.name]:e.target.value })
  }

  register=(e)=>{
    e.preventDefault();
    alert("registered successfully")
  }

  render() {
    return (
      <div className="container">
        <h2>Registration</h2>
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input type="text" className="form-control" onChange={this.inputSet} name="username" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" onChange={this.inputSet} name="password" />
          </div>

          <div className="form-group">
            <label>Display Name</label>
            <input type="text" className="form-control" onChange={this.inputSet} name="displayname" />
          </div>
          <div className="form-group pt-3">
            <button onClick={this.register} className="btn btn-primary">Register</button>
          </div>
        </form>
        
      <div>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>
        <p>{this.state.displayname}</p>

      </div>

      </div>
    );
  }
}
