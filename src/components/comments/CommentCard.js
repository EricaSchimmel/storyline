import React from "react";

const CommentCard = props => {
	return (
		<div>
			<p>{props.comment.user.username}</p>
			<p>On {props.comment.created_at}</p>

			<p>{props.comment.content}</p>
		</div>
	);
};

export default CommentCard;
