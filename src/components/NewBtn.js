import React, { Component } from "react";
import history from "../modules/history";

class NewBtn extends Component {
	handleOnClick = () => {
		if (this.props.objType === "story") {
			history.push("/stories/new");
		} else {
			history.push(`/stories/${this.props.storyId}/${this.props.objType}/new`);
		}
	};

	render() {
		return (
			<div>
				<button onClick={this.handleOnClick}>Add {this.props.objType}</button>
			</div>
		);
	}
}

export default NewBtn;
