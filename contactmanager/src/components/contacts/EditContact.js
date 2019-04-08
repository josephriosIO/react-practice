import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { Consumer } from "../../context";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, error } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is Required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is Required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is Required" } });
      return;
    }

    this.setState({
      name: "",
      phone: "",
      email: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="enter name..."
                    value={name}
                    handleChanges={this.handleChanges}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="enter email..."
                    type="email"
                    value={email}
                    handleChanges={this.handleChanges}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="enter phone..."
                    value={phone}
                    handleChanges={this.handleChanges}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Update Contact"
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

export default EditContact;
