import React, { Component } from "react";

import StoryList from "../../components/stories/StoryList";
import NewBtn from "../../components/buttons/NewBtn";

import { requireLogin } from "../../helpers/componentHelpers";

import { fetchUserStories, deleteStory } from "../../redux/actions/story";
import { connect } from "react-redux";

class DashboardStories extends Component {
	componentDidMount() {
		requireLogin(this.props.currentUser);
		this.props.fetchUserStories(this.props.currentUser.user);
	}

	renderStories = () => {
		if (this.props.stories.length !== 0) {
			return (
				<div>
					<StoryList
						stories={this.props.stories}
						canEdit={true}
						deleteAction={this.props.deleteStory}
						displayUser={false}
					/>
				</div>
			);
		} else {
			return (
				<div>
					<h2>
						You don't have any stories created on your account, to add a story
						click the add story button.
					</h2>
				</div>
			);
		}
	};

	render() {
		if (this.props.loading) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		}
		return (
			<div>
				<h1>Your Stories</h1>
				<NewBtn objType={"story"} />

				{this.renderStories()}
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

export default connect(mapStateToProps, { fetchUserStories, deleteStory })(
	DashboardStories
);
