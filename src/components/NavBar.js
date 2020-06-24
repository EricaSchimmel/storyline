import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	render() {
		return (
			<div id="navBar">
				<ul>
					<li>
						<Link to={"/"}>Home</Link>
					</li>

					<li>
						<Link to={"/signup"}>Sign Up</Link>
					</li>

					<li>
						<Link to={"/login"}>Log In</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
