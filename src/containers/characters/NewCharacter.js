import React, { Component } from "react";

import CharacterInput from "../../components/characters/CharacterInput";
import NotFound from "../../components/errors/NotFound";

import { requireLogin } from "../../helpers/componentHelpers";

import { fetchStory } from "../../redux/actions/story";
import { postCharacter } from "../../redux/actions/character";
import { connect } from "react-redux";

class NewCharacter extends Component {
	componentDidMount() {
		requireLogin(this.props.currentUser);
		let { match } = this.props;
		let storyId = match.params.storyId;
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
			return (
				<div>
					<h1>New Character For {this.props.story.title}</h1>
					<CharacterInput
						action={this.props.postCharacter}
						storyId={this.props.story.id}
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
		canEdit: state.viewedStory.canEdit,
	};
};

export default connect(mapStateToProps, { postCharacter, fetchStory })(
	NewCharacter
);
