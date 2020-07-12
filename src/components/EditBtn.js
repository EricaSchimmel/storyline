import React, { Component } from "react";
import history from "../modules/history";

class EditBtn extends Component {
	handleOnClick = () => {
		if (this.props.objType === "story") {
			history.push(`/stories/${this.props.objId}/edit`);
		} else {
			history.push(`/${this.props.objType}/${this.props.objId}/edit`);
		}
	};

	render() {
		return (
			<div>
				<button onClick={this.handleOnClick}>Edit</button>
			</div>
		);
	}
}

export default EditBtn;
