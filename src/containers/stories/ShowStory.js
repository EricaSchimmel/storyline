import React, { Component } from "react";

import StoryData from "../../components/stories/StoryData";
import CommentList from "../../components/comments/CommentList";
import CommentInput from "../../components/comments/CommentInput";
import NotFound from "../../components/errors/NotFound";

import { fetchStory } from "../../redux/actions/story";
import { fetchComments, postComment } from "../../redux/actions/comment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ShowStory extends Component {
	componentDidMount() {
		let { match } = this.props;
		let storyId = match.params.id;
		this.props.fetchStory(storyId);
		this.props.fetchComments("stories", storyId);
	}

	renderCharacterNameList = () => {
		let characterNameList = (
			<div>This story does not have any characters currently.</div>
		);

		if (this.props.characters.length !== 0) {
			characterNameList = this.props.characters.map(character => {
				return (
					<li key={character.id}>
						<Link to={`/characters/${character.id}`}>{character.name}</Link>
					</li>
				);
			});
		}
		return characterNameList;
	};

	render() {
		if (this.props.loadingStory || this.props.loadingComments) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else if (!this.props.story) {
			return (
				<div>
					<NotFound />
				</div>
			);
		} else {
			return (
				<div>
					<StoryData
						story={this.props.story}
						user={this.props.story.user}
						canEdit={this.props.canEdit}
					/>

					<h3>Characters</h3>
					{this.renderCharacterNameList()}

					<h4>Comments</h4>
					<CommentInput
						currentUser={this.props.currentUser}
						canComment={this.props.canComment}
						postComment={this.props.postComment}
						objType={"stories"}
						objId={this.props.story.id}
					/>
					<CommentList comments={this.props.comments} />
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		story: state.viewedStory.story,
		characters: state.viewedStory.characters,
		comments: state.commentIndex.comments,
		canComment: state.commentIndex.canComment,
		canEdit: state.viewedStory.canEdit,
		loadingStory: state.viewedStory.loading,
		loadingComments: state.commentIndex.loading,
	};
};

export default connect(mapStateToProps, {
	fetchStory,
	fetchComments,
	postComment,
})(ShowStory);
