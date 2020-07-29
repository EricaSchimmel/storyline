import React, { Component } from "react";

import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

export default class CommentSection extends Component {
	render() {
		return (
			<div>
				<CommentInput
					currentUser={this.props.currentUser}
					canComment={this.props.canComment}
					postComment={this.props.postComment}
					objType={this.props.objType}
					objId={this.props.objId}
				/>
				<CommentList comments={this.props.comments} />
			</div>
		);
	}
}
