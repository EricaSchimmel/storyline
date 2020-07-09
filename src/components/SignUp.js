import React, { Component } from "react";
import Errors from "./Errors";
import { Link } from "react-router-dom";

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
			user: { username, email, password, password_confirmation },
		};

		this.props.signup(user).then(res => {
			if (res.data.errors) {
				this.setState({
					errors: res.data.errors,
				});
			} else {
				return this.props.history.push("/");
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
						value={this.state.username}
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
					<br />

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
					Already have an account?{" "}
					<Link to={"/login"}> Click here to log in!</Link>
				</p>
			</div>
		);
	}
}

export default SignUp;
