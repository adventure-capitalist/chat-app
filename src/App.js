import React, { Component } from "react";
import "./components/contact.css";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div className="Contacts">
        <Contact />
        <Contact />
        <Contact />
      </div>
    );
  }
}
export default App;
