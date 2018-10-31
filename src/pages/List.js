import React, { Component } from "react";
import api from "../services/api";

import { Link } from "react-router-dom";

export default class List extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const response = await api.get("users");

    this.setState({ users: response.data });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>User List</h1>
        <Link to="/form"> Voltar </Link>
        <ul>
          {users.map(user => (
            <li key={user._id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
