import React from "react";
import { Link } from "react-router-dom";

const CommentCard = props => {
	return (
		<div>
			<p>
				<Link to={`/users/${props.comment.user.id}`}>
					{props.comment.user.username}
				</Link>
			</p>
			<p>On {props.comment.created_at}</p>

			<p>{props.comment.content}</p>
		</div>
	);
};

export default CommentCard;
