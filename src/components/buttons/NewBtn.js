import React, { Component } from "react";
import history from "../../modules/history";

class NewBtn extends Component {
	handleOnClick = () => {
		if (this.props.objType === "story") {
			history.push("/stories/new");
		} else {
			history.push(`/stories/${this.props.storyId}/${this.props.objType}/new`);
		}
	};

	getBtnName = () => {
		let btnName = this.props.objType;

		if (btnName !== "story") {
			btnName = btnName.substring(0, btnName.length - 1);
		}

		return btnName;
	};

	render() {
		return (
			<div>
				<button onClick={this.handleOnClick}>Add {this.getBtnName()}</button>
			</div>
		);
	}
}

export default NewBtn;
