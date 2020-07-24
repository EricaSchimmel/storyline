import React, { Component } from "react";

import CharacterCard from "./CharacterCard";
import EditBtn from "../buttons/EditBtn";
import DeleteBtn from "../buttons/DeleteBtn";

class CharacterList extends Component {
	render() {
		const characterCards = this.props.characters.map(character => {
			if (this.props.canEdit) {
				return (
					<>
						<CharacterCard character={character} key={character.id} />

						<EditBtn objType="characters" objId={character.id} />
						<DeleteBtn element={character} delete={this.props.deleteAction} />
					</>
				);
			} else {
				return <CharacterCard character={character} key={character.id} />;
			}
		});

		return <div>{characterCards}</div>;
	}
}

export default CharacterList;

CharacterList.defaultProps = {
	canEdit: false,
};
