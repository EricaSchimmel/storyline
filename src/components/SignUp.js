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

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleOnSubmit = event => {
		event.preventDefault();

		const { username, email, password, password_confirmation } = this.state;
		let user = {
			username,
			email,
			password,
			password_confirmation,
		};

		this.props.login(user).then(res => {
			if (res.errors !== []) {
				this.setState({
					errors: res.data.errors,
				});

				console.log(this.state.errors);
			}
		});
	};

	render() {
		return (
			<div id="signup-container">
				<h1>Sign Up</h1>

				<Errors errors={this.state.errors} />

				<form onSubmit={this.handleOnSubmit}>
					<label>Username</label>
					<br />
					<input
						type="text"
						id="username"
						name="username"
						onChange={this.handleOnChange}
						value={this.state.email}
					/>
					<br />

					<label>Email</label>
					<br />
					<input
						type="email"
						id="email"
						name="email"
						onChange={this.handleOnChange}
						value={this.state.email}
					/>
					<br />

					<label>Password</label>
					<br />
					<input
						type="password"
						id="password"
						name="password"
						onChange={this.handleOnChange}
						value={this.state.password}
					/>

					<label>Confirm Password</label>
					<br />
					<input
						type="password"
						id="password_confirmation"
						name="password_confirmation"
						onChange={this.handleOnChange}
						value={this.state.password_confirmation}
					/>
					<br />

					<input type="submit" value="Sign Up" />
				</form>

				<p>
					Already have an account?
					<Link to={"/login"}>Click here to login!</Link>
				</p>
			</div>
		);
	}
}

export default SignUp;
