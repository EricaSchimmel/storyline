import React from "react";

const CommentCard = props => {
	return (
		<div>
			<h3>Comment Created at {props.comment.created_at}</h3>

			<h4>{props.comment.content}</h4>
		</div>
	);
};

export default CommentCard;
