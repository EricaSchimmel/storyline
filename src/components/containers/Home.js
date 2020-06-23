import React, { Component } from "react";
import NavBar from "../NavBar";
import Stories from "../HomeStoryList";

class Home extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<h1>All Stories</h1>
				<Stories />
			</div>
		);
	}
}

export default Home;
