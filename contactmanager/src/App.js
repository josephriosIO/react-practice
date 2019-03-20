import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const members = [
  {
    name: "Joseph Rios",
    email: "josephrios56@gmail.com",
    phone: "925-325-6695"
  },
  {
    name: "marysol Rios",
    email: "marysolrios56@gmail.com",
    phone: "925-729-6695"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          {members.map(member => (
            <Contact membersProps={member} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
