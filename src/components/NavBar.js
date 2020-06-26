import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NavBar extends Component {
	renderLogLinks = () => {
		if (this.props.currentUser.loggedIn) {
			return (
				<>
					<li>
						<Link to={"/logout"}>Log Out</Link>
					</li>
				</>
			);
		} else {
			return (
				<>
					<li>
						<Link to={"/signup"}>Sign Up</Link>
					</li>

					<li>
						<Link to={"/login"}>Log In</Link>
					</li>
				</>
			);
		}
	};

	render() {
		return (
			<div id="navBar">
				<ul>
					<li>
						<Link to={"/"}>Home</Link>
					</li>

					{this.renderLogLinks()}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
};

export default connect(mapStateToProps)(NavBar);
