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
				</form>
			</div>
		);
	}
}

export default CommentInput;
