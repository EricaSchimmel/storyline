import React, { Component } from "react";

import CharacterInput from "../../components/characters/CharacterInput";
import NotFound from "../../components/errors/NotFound";

import { requireLogin } from "../../helpers/componentHelpers";

import { fetchCharacter, patchCharacter } from "../../redux/actions/character";
import { connect } from "react-redux";

class EditCharacter extends Component {
	componentDidMount() {
		requireLogin(this.props.currentUser);
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
					<h1>Editing {this.props.character.name}'s Information</h1>
					<CharacterInput
						actionType="edit"
						character={this.props.character}
						action={this.props.patchCharacter}
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
		loading: state.viewedCharacter.loading,
	};
};

export default connect(mapStateToProps, { fetchCharacter, patchCharacter })(
	EditCharacter
);
