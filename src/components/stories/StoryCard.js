import React from "react";
import { Link } from "react-router-dom";

const StoryCard = props => {
	if (!props.story.user) {
		return <div></div>;
	} else if (!props.displayUser) {
		return (
			<div>
				<h2>
					<Link to={`/stories/${props.story.id}`}>{props.story.title}</Link>
				</h2>
			</div>
		);
	} else {
		return (
			<div>
				<h2>
					<Link to={`/stories/${props.story.id}`}>{props.story.title}</Link>
				</h2>
				<h3>
					Created By:{" "}
					<Link to={`/users/${props.story.user.id}`}>
						{props.story.user.username}
					</Link>
				</h3>
			</div>
		);
	}
};
export default StoryCard;
