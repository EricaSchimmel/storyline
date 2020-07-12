import React, { Component } from "react";

class CommentInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
		};
	}

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		if (this.props.currentUser.loggedIn && this.props.canComment) {
			return (
				<div>
					<form>
						<label>Add a comment:</label>
						<br />
						<textarea
							name="comment"
							id="comment"
							value={this.state.comment}
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
					<p>You must be logged in to leave a comment.</p>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

export default CommentInput;
