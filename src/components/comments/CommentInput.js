import React, { Component } from "react";
import { Link } from "react-router-dom";

class CommentInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
		};
	}

	handleOnSubmit = event => {
		event.preventDefault();

		let data = { content: this.state.content };

		this.props.postComment(this.props.objType, this.props.objId, data);
		this.setState({ content: "" });
	};

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		if (this.props.currentUser.loggedIn && this.props.canComment) {
			return (
				<div>
					<form onSubmit={this.handleOnSubmit}>
						<label>Add a comment:</label>
						<br />
						<textarea
							name="content"
							id="content"
							value={this.state.content}
							onChange={this.handleOnChange}
						/>
						<br />

						<input type="submit" value="Add Comment" />
					</form>
				</div>
			);
		} else if (!this.props.currentUser.loggedIn) {
			return (
				<div>
					<p>
						You must be <Link to={"/login"}>logged in</Link> to leave a comment.
					</p>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

export default CommentInput;
