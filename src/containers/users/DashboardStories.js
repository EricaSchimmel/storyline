import React, { Component } from "react";

import NavBar from "../../components/NavBar";
import StoryList from "../../components/stories/StoryList";

import history from "../../modules/history";
import { requireLogin } from "../../helpers/componentHelpers";

import { logout } from "../../redux/actions/user";
import { fetchUserStories } from "../../redux/actions/story";
import { connect } from "react-redux";

class DashboardStories extends Component {
	componentDidMount() {
		this.props.fetchUserStories(this.props.currentUser.user);
	}

	render() {
		return (
			<div>
				{requireLogin(this.props.currentUser)}

				<NavBar
					currentUser={this.props.currentUser}
					logout={this.props.logout}
					history={history}
				/>

				<h1>Your Stories</h1>
				<StoryList stories={this.props.stories} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		stories: state.storyIndex.stories,
		loading: state.storyIndex.loading,
	};
};

export default connect(mapStateToProps, { logout, fetchUserStories })(
	DashboardStories
);
