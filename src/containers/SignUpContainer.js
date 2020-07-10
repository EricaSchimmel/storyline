import React, { Component } from "react";

import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp";

import history from "../modules/history";

import { signup, logout } from "../redux/actions/user";
import { connect } from "react-redux";

class SignUpContainer extends Component {
	render() {
		return (
			<div>
				<NavBar
					currentUser={this.props.currentUser}
					logout={this.props.logout}
					history={history}
				/>
				<SignUp
					currentUser={this.props.currentUser}
					signup={this.props.signup}
					history={history}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
};

export default connect(mapStateToProps, { signup, logout })(SignUpContainer);
