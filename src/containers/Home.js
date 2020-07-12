import React, { Component } from "react";

import NavBar from "../components/NavBar";
import StoryList from "../components/StoryList";

import history from "../modules/history";

import { logout } from "../redux/actions/user";
import { fetchIndexStories } from "../redux/actions/story";
import { connect } from "react-redux";

class Home extends Component {
	componentDidMount() {
		this.props.fetchIndexStories();
	}

	render() {
		if (this.props.loading) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else {
			return (
				<div>
					<NavBar
						currentUser={this.props.currentUser}
						logout={this.props.logout}
						history={history}
					/>
					<h1>All Stories</h1>
					<StoryList stories={this.props.stories} />
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		stories: state.storyIndex.stories,
		loading: state.storyIndex.loading,
	};
};

export default connect(mapStateToProps, { logout, fetchIndexStories })(Home);
