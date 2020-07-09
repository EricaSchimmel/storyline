import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import { login, logout } from "../redux/actions/user";
import { connect } from "react-redux";

class LoginContainer extends Component {
	render() {
		return (
			<div>
				<NavBar currentUser={this.props.currentUser} />
				<Login currentUser={this.props.currentUser} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
};

export default connect(mapStateToProps, { login, logout })(LoginContainer);
