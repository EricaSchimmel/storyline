import React, { Component } from "react";
import NavBar from "../NavBar";
import StoryList from "../StoryList";

class Home extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<h1>All Stories</h1>
				<StoryList />
			</div>
		);
	}
}

export default Home;
