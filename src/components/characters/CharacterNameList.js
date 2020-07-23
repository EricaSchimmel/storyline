import React, { Component } from "react";

import EditBtn from "../buttons/EditBtn";
import DeleteBtn from "../buttons/DeleteBtn";

import { Link } from "react-router-dom";

class CharacterNameList extends Component {
	renderCharacterNameList = () => {
		let characterNameList = (
			<div>This story does not have any characters currently.</div>
		);

		if (this.props.characters.length !== 0) {
			characterNameList = this.props.characters.map(character => {
				if (!this.props.canEdit) {
					return (
						<li key={character.id}>
							<Link to={`/characters/${character.id}`}>{character.name}</Link>
						</li>
					);
				} else {
					return (
						<li key={character.id}>
							<Link to={`/characters/${character.id}`}>{character.name}</Link>
							<EditBtn objType="characters" objId={character.id} />
							<DeleteBtn element={character} delete={this.props.deleteAction} />
						</li>
					);
				}
			});
		}
		return characterNameList;
	};

	render() {
		return <div>{this.renderCharacterNameList()}</div>;
	}
}

export default CharacterNameList;

CharacterNameList.defaultProps = {
	canEdit: false,
};
