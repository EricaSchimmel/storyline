import React, { Component } from "react";
import NavBar from "../NavBar";
import SignUp from "../SignUp";
import { connect } from "react-redux";

class SignUpContainer extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<SignUp />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
};

export default connect(mapStateToProps)(SignUpContainer);
