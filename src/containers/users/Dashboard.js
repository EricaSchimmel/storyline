import React, { Component } from "react";

import { requireLogin } from "../../helpers/componentHelpers";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
	render() {
		return (
			<div>
				{requireLogin(this.props.currentUser)}

				<h1>
					Welcome to your homepage, {this.props.currentUser.user.username}!
				</h1>
				<h2>What would you like to do?</h2>

				<h3>
					<Link to={"/dashboard/stories"}>View your stories</Link>
				</h3>

				<h3>
					<Link to={"/dashboard/characters"}>View your characters</Link>
				</h3>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
};

export default connect(mapStateToProps)(Dashboard);
