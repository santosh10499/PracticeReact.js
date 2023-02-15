import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      userEmail: '',
    };
  }
   handleName = (e)=>{
    this.setState({
      name: e.target.value
    })
   }
    handleEmail = (e)=>{
      this.setState({
        email: e.target.value
      })
    }
    handlePassword = (e)=>{
      this.setState({
        password: e.target.value
      })
    }
    greet = (e)=>{
      e.preventDefault()
      this.setState({
        userEmail: `Hello, ${this.state.name}`
      })
    }

  render() {
    return (
      <>
        <div className="input-container">
          <form action="" onSubmit={this.greet} >
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name} placeholder="Enter your name" onChange = {this.handleName}/>
            <br />
            <label htmlFor="email">Enter your email</label>
            <input type="email" name="email" placeholder="Enter your email" value={this.state.email} onChange = {this.handleEmail}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" name="password" value={this.state.password} onChange = {this.handlePassword}/>
            <input type="submit" value="submit" />
          </form>
          <h1>{this.state.userEmail}</h1>
        </div>
      </>
    );
  }
}