import React, { Component } from 'react'
import First from './First'

export default class FirstTask extends Component {
    constructor(){
        super()
        
        this.state={
            email:"",
            password:"",
            printEmail:'',
            printHello:''

        }
    }
        login=()=>{
          this.setState({printHello:"Hello ,"})

        this.setState({printEmail:this.state.email})
}
        
    

  render() {
    return (
      <>
      <div style={{display:"flex",justifyContent:"space-around",width:"25%",marginLeft:"25%"}}>
      <input value={this.state.email}type="text" onChange={(e)=>{this.setState({email:e.target.value})}}></input>
      <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}}></input>
      <button onClick={this.login}>Login</button>
      </div>
      <First email={` ${this.state.printHello} ${this.state.printEmail}`}></First>
      </>
    )
  }
}

    
