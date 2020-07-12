import React from "react";

const CommentCard = props => {
	return (
		<div>
			<h4>Comment Created at {props.comment.created_at}</h4>

			<h3>{props.comment.content}</h3>
		</div>
	);
};

export default CommentCard;
