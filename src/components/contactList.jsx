import React, { Component } from "react";

import "./contact.css";

class Contact extends Component {
  state = {
    online: this.props.online
  };

  clickEventListener = () => {
    this.setState({ online: this.state.online ? false : true });
  };

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.picture} />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <p onClick={this.clickEventListener} className="status-text">
            <span
              className={this.state.online ? "status-online" : "status-offline"}
            >
              o
            </span>
            {this.state.online ? " Online" : " Offline"}
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
