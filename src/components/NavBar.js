import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/user";

class NavBar extends Component {
	renderLogLinks = () => {
		if (this.props.currentUser.loggedIn) {
			return (
				<>
					<li>
						<button onClick={this.props.logout}>Log Out</button>
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

export default connect(mapStateToProps, { logout })(NavBar);
