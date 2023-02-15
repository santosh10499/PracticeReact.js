import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return <>
      <header>

        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png" alt="w3school-logo" width="42px" height="42px" />
        </div>
        <div className="dropdown-container">
          <div className="dropdown">
            <p>Tutorials</p>
            <img className="dropdown-caret" src="https://icon-library.com/images/black-down-arrow-icon/black-down-arrow-icon-12.jpg" alt="small" />
          </div>
          <div className="dropdown">
            <p>References</p>
            <img className="dropdown-caret" src="https://icon-library.com/images/black-down-arrow-icon/black-down-arrow-icon-12.jpg" alt="small" />
          </div>
          <div className="dropdown">
            <p>Exericse</p>
            <img className="dropdown-caret" src="https://icon-library.com/images/black-down-arrow-icon/black-down-arrow-icon-12.jpg" alt="small" />
          </div>
          <div className="dropdown">
            <p>Sign Up</p>
          </div>
        </div>
        <div className="blank-space">
          &nbsp;
        </div>
        <div className="icon-container">
          <img src="https://cdn-icons-png.flaticon.com/512/37/37905.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/44/44386.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/68/68213.png" alt="" />
        </div>
        <div className="button-container">
          <button>Pro</button>
          <button>Get Certified</button>
          <button>Create Website</button>
          <button>Log in</button>
        </div>
      </header>
    </>;
  }
}