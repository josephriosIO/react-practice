import React, { Component } from "react";

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

  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Add contact</div>
        <div className="card-body">
          <form>
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
  }
}

export default AddContact;
