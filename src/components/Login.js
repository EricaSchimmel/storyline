import React, { Component } from "react";
import Errors from "./Errors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/actions/user";

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

		const { email, password } = this.state;
		let user = {
			email,
			password,
		};

		this.props.login(user);
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

				{/* <p>
					New User? <Link to={"/signup"}>Click here to signup!</Link>
				</p> */}
			</div>
		);
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		login: () => {
// 			dispatch(login());
// 		},
// 	};
// };

export default connect(null, { login })(LoginContainer);
