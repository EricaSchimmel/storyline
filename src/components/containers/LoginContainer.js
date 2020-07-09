import React, { Component } from "react";
import NavBar from "../NavBar";
import Login from "../Login";
import { connect } from "react-redux";

class LoginContainer extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Login />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
};

export default connect(mapStateToProps)(LoginContainer);
