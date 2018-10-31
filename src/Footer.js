import React, { Fragment } from "react";
import { connect } from "react-redux";

const Footer = ({ qty }) => <div>{qty}</div>;

const mapStateToProps = state => ({
  qty: state.todos.length
});

export default connect(mapStateToProps)(Footer);
