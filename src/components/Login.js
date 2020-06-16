import React, { Component } from "react";
import Errors from "./Errors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LoginContainer extends Component {
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

		// this.props.login()
	};

	render() {
		return (
			<div id="login-container">
				<Errors errors={this.state.errors} />
				<form onSubmit={this.handleOnSubmit}>
					<label>Email</label>
					<br />
					<input
						type="email"
						id="email"
						onChange={this.handleOnChange}
						value={this.state.email}
					/>
					<br />

					<label>Password</label>
					<br />
					<input
						type="password"
						id="password"
						onChange={this.handleOnChange}
						value={this.state.password}
					/>
					<br />

					<input type="submit" value="Log In" />
				</form>

				{/* <p>
					New User? <Link to={"/signup"}>Click here to signup!</Link>
				</p> */}
			</div>
		);
	}
}

// const mapDispatchToProps = dispatch => ({
//     login:
// });

export default LoginContainer;
