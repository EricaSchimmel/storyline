import React, { Component } from "react";

import StoryData from "../../components/stories/StoryData";
import CommentSection from "../../components/comments/CommentSection";
import CharacterNameList from "../../components/characters/CharacterNameList";
import NotFound from "../../components/errors/NotFound";
import NewBtn from "../../components/buttons/NewBtn";

import { fetchStory } from "../../redux/actions/story";
import {
	fetchStoryCharacters,
	deleteCharacter,
} from "../../redux/actions/character";
import { fetchComments, postComment } from "../../redux/actions/comment";
import { connect } from "react-redux";

class ShowStory extends Component {
	componentDidMount() {
		let { match } = this.props;
		let storyId = match.params.id;
		this.props.fetchStory(storyId);
		this.props.fetchStoryCharacters(storyId);
		this.props.fetchComments("stories", storyId);
	}

	render() {
		if (
			this.props.loadingStory ||
			this.props.loadingComments ||
			this.props.loadingCharacters
		) {
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
					<NewBtn
						canEdit={this.props.canEdit}
						objType="characters"
						storyId={this.props.story.id}
					/>
					<CharacterNameList
						characters={this.props.characters}
						deleteAction={this.props.deleteCharacter}
						canEdit={this.props.canEdit}
					/>

					<h4>Comments</h4>

					<CommentSection
						currentUser={this.props.currentUser}
						canComment={this.props.canComment}
						postComment={this.props.postComment}
						objType={"stories"}
						objId={this.props.story.id}
						comments={this.props.comments}
					/>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		story: state.viewedStory.story,
		characters: state.characterIndex.characters,
		comments: state.commentIndex.comments,
		canComment: state.commentIndex.canComment,
		canEdit: state.viewedStory.canEdit,
		loadingStory: state.viewedStory.loading,
		loadingCharacters: state.characterIndex.loading,
		loadingComments: state.commentIndex.loading,
	};
};

export default connect(mapStateToProps, {
	fetchStory,
	fetchComments,
	postComment,
	fetchStoryCharacters,
	deleteCharacter,
})(ShowStory);
