import React, { Component } from "react";

import NavBar from "../components/NavBar";
import CharacterData from "../components/characters/CharacterData";
import CommentList from "../components/CommentList";
import CommentInput from "../components/CommentInput";

import history from "../modules/history";

import { logout } from "../redux/actions/user";
//import { fetchStory } from "../redux/actions/story";
import { connect } from "react-redux";

class ShowCharacter extends Component {
	componentDidMount() {
		let { match } = this.props;
		let characterId = match.params.id;
	}

	render() {
		return (
			<div>
				<NavBar
					currentUser={this.props.currentUser}
					logout={this.props.logout}
					history={history}
				/>

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

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		character: state.viewedCharacter.character,
		user: state.viewedStory.user,
		story: state.viewedStory.story,
		comments: state.viewedStory.comments,
		canComment: state.viewedStory.canComment,
		canEdit: state.viewedStory.canEdit,
		loading: state.viewedStory.loading,
	};
};

export default connect(mapStateToProps, { logout })(ShowCharacter);
