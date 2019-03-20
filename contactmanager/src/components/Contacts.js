import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Joseph Rios",
        email: "josephrios56@gmail.com",
        phone: "925-325-6695"
      },
      {
        id: 2,
        name: "marysol Rios",
        email: "marysolrios56@gmail.com",
        phone: "925-729-6695"
      },
      {
        id: 3,
        name: "jon smith",
        email: "jonsmith@gmail.com",
        phone: "650-782-6646"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
