import React, { Component } from "react";
import CommentCard from "./CommentCard";

class CommentList extends Component {
	render() {
		const commentCards = this.props.comments.map(comment => {
			return <CommentCard comment={comment} key={comment.id} />;
		});

		return <div>{commentCards}</div>;
	}
}

export default CommentList;
