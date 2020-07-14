import React, { Component } from "react";

import CharacterData from "../../components/characters/CharacterData";
import CommentList from "../../components/comments/CommentList";
import CommentInput from "../../components/comments/CommentInput";
import NotFound from "../../components/errors/NotFound";

import { fetchCharacter } from "../../redux/actions/character";
import { connect } from "react-redux";

class ShowCharacter extends Component {
	componentDidMount() {
		let { match } = this.props;
		let characterId = match.params.id;
		this.props.fetchCharacter(characterId);
	}

	render() {
		if (this.props.loading) {
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
						user={this.props.user}
						story={this.props.story}
						canEdit={this.props.canEdit}
					/>

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
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		character: state.viewedCharacter.character,
		user: state.viewedCharacter.user,
		story: state.viewedCharacter.story,
		comments: state.viewedCharacter.comments,
		canComment: state.viewedCharacter.canComment,
		canEdit: state.viewedCharacter.canEdit,
		loading: state.viewedCharacter.loading,
	};
};

export default connect(mapStateToProps, { fetchCharacter })(ShowCharacter);
