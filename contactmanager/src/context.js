import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
      },
      {
        id: 4,
        name: "jon notsmith",
        email: "jonsmith@gmail.com",
        phone: "650-782-6646"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
