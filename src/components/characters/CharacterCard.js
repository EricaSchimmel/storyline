import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = props => {
	debugger;
	return (
		<div>
			<h2>{props.character.name}</h2>

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
};

export default CharacterCard;
