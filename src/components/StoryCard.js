import React from "react";
import { Link } from "react-router-dom";

const StoryCard = props => {
	return (
		<div>
			<h2>
				<Link to={`/stories/${props.story.id}`}>{props.story.title}</Link>
			</h2>
			<h3>Created By: {props.story.user.username}</h3>
		</div>
	);
};

export default StoryCard;
