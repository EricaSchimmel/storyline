import React, { Component } from "react";

import SignUp from "../../components/users/SignUp";

import history from "../../modules/history";
import { redirectToHomeWhenLoggedIn } from "../../helpers/componentHelpers";

import { signup } from "../../redux/actions/user";
import { connect } from "react-redux";

class SignUpContainer extends Component {
	render() {
		return (
			<div>
				{redirectToHomeWhenLoggedIn(this.props.currentUser)}

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

export default connect(mapStateToProps, { signup })(SignUpContainer);
