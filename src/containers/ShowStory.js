import React, { Component } from "react";

import NavBar from "../components/NavBar";
import StoryData from "../components/stories/StoryData";
import CommentList from "../components/CommentList";
import CommentInput from "../components/CommentInput";

import history from "../modules/history";

import { logout } from "../redux/actions/user";
import { fetchStory } from "../redux/actions/story";
import { connect } from "react-redux";

class ShowStory extends Component {
	componentDidMount() {
		let { match } = this.props;
		let storyId = match.params.id;
		this.props.fetchStory(storyId);
	}

	render() {
		const characterNameList = this.props.characters.map(character => {
			return <li>{character.name}</li>;
		});

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

				<h3>Characters</h3>
				{characterNameList}

				<h4>Comments</h4>
				<CommentInput
					currentUser={this.props.currentUser}
					canComment={this.props.canEdit}
				/>
				<CommentList comments={this.props.comments} />
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
