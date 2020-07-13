import React from "react";

const CharacterCard = props => {
	return (
		<div>
			<h1>{props.name}</h2>
			<h2>
				From {props.story.title} Created By: {props.user.username}
			</h2>
		</div>
	);
};

export default CharacterCard;
