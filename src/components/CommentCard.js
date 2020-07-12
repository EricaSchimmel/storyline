import React from "react";

const CommentCard = props => {
	return (
		<div>
			<p>Comment Created at {props.comment.created_at}</p>

			<p>{props.comment.content}</p>
		</div>
	);
};

export default CommentCard;
