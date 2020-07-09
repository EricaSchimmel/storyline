import React, { Component } from "react";
import { Link } from "react-router-dom";

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

export default NavBar;
