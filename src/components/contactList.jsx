import React, { Component } from "react";

import "./contact.css";

class Contact extends Component {
  state = {
    online: "Online"
  };

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.picture} />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <p className="status-text">{this.state.online}</p>
        </div>
      </div>
    );
  }
}

export default Contact;
