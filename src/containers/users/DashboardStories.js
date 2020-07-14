import React, { Component } from "react";

import StoryList from "../../components/stories/StoryList";

import { requireLogin } from "../../helpers/componentHelpers";

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

export default connect(mapStateToProps, { fetchUserStories })(DashboardStories);
