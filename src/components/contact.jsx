import React, { Component } from "react";
import axios from "axios";
import "./contact.css";
const API = "https://randomuser.me/api/";

class Contact extends Component {
  state = {
    users: { name: { first: "", last: "" }, picture: { thumbnail: "" } },
    online: false
  };

  componentDidMount() {
    this.getData();
  }

  isOnline() {
    let test = Math.round(Math.random());
    if (test === 1) {
      this.setState({ online: true });
    } else {
      this.setState({ online: false });
    }
  }
  getData() {
    axios.get(API).then(hit => {
      console.log(hit.data.results[0]);
      this.setState({ users: hit.data.results[0] });
      this.isOnline();
    });
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.state.users.picture.thumbnail} />
        <div>
          <h4 className="name">
            {this.state.users.name.first + " " + this.state.users.name.last}
          </h4>
          <p className="status-text">
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
