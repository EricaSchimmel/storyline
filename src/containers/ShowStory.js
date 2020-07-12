import React, { Component } from "react";

import NavBar from "../components/NavBar";
import StoryData from "../components/StoryData";

import history from "../modules/history";

import { logout } from "../redux/actions/user";
import { fetchStory } from "../redux/actions/story";
import { connect } from "react-redux";

// TODO: Add in Character List
// TODO: Comment Input form

class ShowStory extends Component {
	componentDidMount() {
		let { match } = this.props;
		let storyId = match.params.id;
		this.props.fetchStory(storyId);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<NavBar
					currentUser={this.props.currentUser}
					logout={this.props.logout}
					history={history}
				/>

				<StoryData
					story={this.props.story}
					user={this.props.user}
					canEdit={this.props.canEdit}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		story: state.viewedStory.story,
		user: state.viewedStory.user,
		characters: state.viewedStory.characters,
		comments: state.viewedStory.comments,
		canComment: state.viewedStory.canComment,
		canEdit: state.viewedStory.canEdit,
		loading: state.viewedStory.loading,
	};
};

export default connect(mapStateToProps, { logout, fetchStory })(ShowStory);
