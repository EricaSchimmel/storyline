import React, { Component } from "react";
import { connect } from "react-redux";

class SignUpContainer extends Component {
	render() {
		return <div></div>;
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
};

export default connect(mapStateToProps)(SignUpContainer);
