import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
	render() {
		return (
			<div>
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

export default Dashboard;
