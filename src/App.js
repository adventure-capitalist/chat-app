import React, { Component } from "react";
import "./components/contact.css";
import Contact from "./components/contactList";
import axios from "axios";
const API = "https://randomuser.me/api/";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    let d = [];
    for (let i = 0; i < 5; i++) {
      axios.get(API).then(hit => {
        console.log(hit.data.results[0]);
        d.push(hit.data.results[0]);
        this.setState({ users: d });
      });
    }
    console.log(d);
    console.log(this.state.users);
  }

  render() {
    return (
      <div className="Contacts">
        <div>
          {this.state.users.map((item, index) => (
            <Contact
              picture={item.picture.thumbnail}
              name={item.name.first + " " + item.name.last}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
