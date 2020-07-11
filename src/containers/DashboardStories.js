import React, { Component } from "react";

import NavBar from "../components/NavBar";

import history from "../modules/history";

import { logout } from "../redux/actions/user";
import { connect } from "react-redux";

class DashboardStories extends Component {
	render() {
		return (
			<div>
				{requireLogin(this.props.currentUser)}

				<NavBar
					currentUser={this.props.currentUser}
					logout={this.props.logout}
					history={history}
				/>

				<h1>Your Stories</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		stories: state.stories,
		loading: state.loading,
	};
};

export default connect(mapStateToProps, { logout })(DashboardStories);
