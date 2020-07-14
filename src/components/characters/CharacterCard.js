import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = props => {
	if (!props.character.story) {
		return <div></div>;
	} else {
		return (
			<div>
				<h2>
					<Link to={`/characters/${props.character.id}`}>
						{props.character.name}
					</Link>
				</h2>

				<h3>
					From{" "}
					<Link to={`/stories/${props.character.story.id}`}>
						{props.character.story.title}
					</Link>
					, By:
					{props.character.user.username}
				</h3>
			</div>
		);
	}
};

export default CharacterCard;
