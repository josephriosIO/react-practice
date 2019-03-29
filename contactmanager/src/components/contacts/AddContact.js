import React, { Component } from "react";
import { Consumer } from "../../context";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    const newContact = {
      name,
      phone,
      email,
      id: Date.now()
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState({
      name: "",
      phone: "",
      email: ""
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      onChange={this.handleChanges}
                      value={this.state.name}
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter name..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                      onChange={this.handleChanges}
                      value={this.state.email}
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter email..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone</label>
                    <input
                      onChange={this.handleChanges}
                      value={this.state.phone}
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter phone..."
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
