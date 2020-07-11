import React, { Component } from "react";

import NavBar from "../components/NavBar";

import history from "../modules/history";
import { requireLogin } from "../helpers/componentHelpers";

import { logout } from "../redux/actions/user";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
	render() {
		return (
			<div>
				{requireLogin(this.props.currentUser)}

				<NavBar
					currentUser={this.props.currentUser}
					logout={this.props.logout}
					history={history}
				/>

				<h1>Welcome to your homepage, {this.props.currentUser}!</h1>
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

export default connect(mapStateToProps, { logout })(Dashboard);
