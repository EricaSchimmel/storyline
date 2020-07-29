import React, { Component } from "react";

import StoryList from "../../components/stories/StoryList";
import NotFound from "../../components/errors/NotFound";

import { Link } from "react-router-dom";

import { fetchUser } from "../../redux/actions/user";
import { fetchStories } from "../../redux/actions/story";
import { connect } from "react-redux";

class UserStories extends Component {
	componentDidMount() {
		let { match } = this.props;
		let userId = match.params.id;

		this.props.fetchUser(userId);
		this.props.fetchStories(userId);
	}

	renderStories = () => {
		if (this.props.stories.length !== 0) {
			return (
				<>
					<StoryList stories={this.props.stories} displayUser={false} />
				</>
			);
		} else {
			return (
				<>
					<h2>This user currently has no stories created currently.</h2>
				</>
			);
		}
	};

	render() {
		if (this.props.loadingUser || this.props.loadingStories) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else if (!this.props.viewedUser) {
			return (
				<>
					<NotFound />
				</>
			);
		} else {
			return (
				<div>
					<h1>
						<Link to={`/users/${this.props.viewedUser.id}`}>
							{this.props.viewedUser.username}
						</Link>
						's Stories
					</h1>

					{this.renderStories()}
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		viewedUser: state.viewedUser.user,
		stories: state.storyIndex.stories,
		loadingUser: state.viewedUser.loading,
		loadingStories: state.storyIndex.loading,
	};
};

export default connect(mapStateToProps, { fetchUser, fetchStories })(
	UserStories
);
