import React from "react";

const StoryCard = props => {
	return (
		<div>
			<h2>{props.story.title}</h2>
			<h3>Created By: {props.story.user.username}</h3>
		</div>
	);
};

export default StoryCard;
