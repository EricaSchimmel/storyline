import React, { Component } from "react";

import Login from "../../components/users/Login";

import history from "../../modules/history";
import { redirectToHomeWhenLoggedIn } from "../../helpers/componentHelpers";

import { login } from "../../redux/actions/user";
import { connect } from "react-redux";

class LoginContainer extends Component {
	render() {
		return (
			<div>
				{redirectToHomeWhenLoggedIn(this.props.currentUser)}

				<Login
					currentUser={this.props.currentUser}
					login={this.props.login}
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

export default connect(mapStateToProps, { login })(LoginContainer);
