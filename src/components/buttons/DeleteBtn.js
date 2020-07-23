import React, { Component } from "react";

class DeleteBtn extends Component {
	handleOnClick = event => {
		event.preventDefault();

		this.props.delete(this.props.element);
	};

	render() {
		return (
			<div>
				<button onClick={this.handleOnClick}>Delete</button>
			</div>
		);
	}
}

export default DeleteBtn;
