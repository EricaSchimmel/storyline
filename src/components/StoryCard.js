import React from "react";

const StoryCard = props => {
	return (
		<div>
			<h2>{props.title}</h2>
			<h3>Created By: {props.username}</h3>
		</div>
	);
};

export default StoryCard;
