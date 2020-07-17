import React, { Component } from "react";

import StoryData from "../../components/stories/StoryData";
import CommentList from "../../components/comments/CommentList";
import CommentInput from "../../components/comments/CommentInput";
import NotFound from "../../components/errors/NotFound";

import { fetchStory } from "../../redux/actions/story";
import { connect } from "react-redux";

class ShowStory extends Component {
	componentDidMount() {
		let { match } = this.props;
		let storyId = match.params.id;
		this.props.fetchStory(storyId);
	}

	render() {
		if (this.props.loading) {
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
			const characterNameList = this.props.characters.map(character => {
				return <li key={character.id}>{character.name}</li>;
			});

			return (
				<div>
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
						canComment={this.props.canComment}
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
		user: state.viewedStory.user,
		characters: state.viewedStory.characters,
		comments: state.viewedStory.comments,
		canComment: state.viewedStory.canComment,
		canEdit: state.viewedStory.canEdit,
		loading: state.viewedStory.loading,
	};
};

export default connect(mapStateToProps, { fetchStory })(ShowStory);
