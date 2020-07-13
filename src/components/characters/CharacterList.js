import React, { Component } from "react";
import CharacterCard from "./CharacterCard";

class CharacterList extends Component {
	render() {
		const characterCards = this.props.characters.map(character => {
			return <CharacterCard character={character} key={character.id} />;
		});

		return <div>{characterCards}</div>;
	}
}

export default CharacterList;
