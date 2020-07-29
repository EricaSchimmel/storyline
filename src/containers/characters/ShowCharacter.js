import React, { Component } from "react";

import CharacterData from "../../components/characters/CharacterData";
import CommentSection from "../../components/comments/CommentSection";
import NotFound from "../../components/errors/NotFound";

import { fetchCharacter } from "../../redux/actions/character";
import { fetchComments, postComment } from "../../redux/actions/comment";
import { connect } from "react-redux";

class ShowCharacter extends Component {
	componentDidMount() {
		let { match } = this.props;
		let characterId = match.params.id;
		this.props.fetchCharacter(characterId);
		this.props.fetchComments("characters", characterId);
	}

	render() {
		if (this.props.loadingCharacter || this.props.loadingComments) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else if (!this.props.character) {
			return (
				<div>
					<NotFound />
				</div>
			);
		} else {
			return (
				<div>
					<CharacterData
						character={this.props.character}
						user={this.props.character.user}
						story={this.props.character.story}
						canEdit={this.props.canEdit}
					/>

					<h4>Comments</h4>
					<CommentSection
						currentUser={this.props.currentUser}
						canComment={this.props.canComment}
						postComment={this.props.postComment}
						objType={"characters"}
						objId={this.props.character.id}
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
		character: state.viewedCharacter.character,
		canEdit: state.viewedCharacter.canEdit,
		comments: state.commentIndex.comments,
		canComment: state.commentIndex.canComment,
		loadingCharacter: state.viewedCharacter.loading,
		loadingComments: state.commentIndex.loading,
	};
};

export default connect(mapStateToProps, {
	fetchCharacter,
	fetchComments,
	postComment,
})(ShowCharacter);
