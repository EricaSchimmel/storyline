import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	handleOnLogout = () => {
		this.props.logout().then(() => {
			this.props.history.push("/");
		});
	};

	renderLogLinks = () => {
		if (this.props.currentUser.loggedIn) {
			return (
				<>
					<li>
						<Link to={"/dashboard"}>{this.props.currentUser.username}</Link>
					</li>

					<li>
						<button onClick={this.handleOnLogout}>Log Out</button>
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
