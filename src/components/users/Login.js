import React, { Component } from "react";
import Errors from "../errors/Errors";
import { Link } from "react-router-dom";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
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

		const { email, password } = this.state;
		let user = {
			email,
			password,
		};

		this.props.login(user).then(res => {
			if (res.data.errors) {
				this.setState({
					errors: res.data.errors,
				});
			} else {
				return this.props.history.push("/dashboard");
			}
		});
	};

	render() {
		return (
			<div id="login-container">
				<h1>Log In</h1>

				<Errors errors={this.state.errors} />

				<form onSubmit={this.handleOnSubmit}>
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

					<input type="submit" value="Log In" />
				</form>

				<p>
					New User? <Link to={"/signup"}>Click here to signup!</Link>
				</p>
			</div>
		);
	}
}

export default Login;
