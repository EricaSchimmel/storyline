import React, { Component } from "react";
import CommentCard from "./CommentCard";

class CommentList extends Component {
	render() {
		if (this.props.comments.length === 0) {
			return (
				<div>
					<p>There are currently no comments on this page.</p>
				</div>
			);
		} else {
			const commentCards = this.props.comments.map(comment => {
				return <CommentCard comment={comment} key={comment.id} />;
			});

			return <div>{commentCards}</div>;
		}
	}
}

export default CommentList;
