import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = props => {
	if (!props.character.story) {
		return <div></div>;
	} else if (!props.displayUser) {
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
				</h3>
			</div>
		);
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
					<Link to={`/users/${props.character.user.id}`}>
						{props.character.user.username}
					</Link>
				</h3>
			</div>
		);
	}
};

export default CharacterCard;
