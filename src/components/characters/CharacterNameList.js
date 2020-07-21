import React, { Component } from "react";
import { Link } from "react-router-dom";

class CharacterNameList extends Component {
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
		return <div>{this.renderCharacterNameList()}</div>;
	}
}

export default CharacterNameList;
