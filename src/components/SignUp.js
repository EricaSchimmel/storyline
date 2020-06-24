import React, { Component } from "react";
import Errors from "./Errors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../redux/actions/user";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
			errors: [],
		};
	}

	render() {
		return <div></div>;
	}
}

export default SignUp;
