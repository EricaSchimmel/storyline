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

	render() {
		if (this.props.canEdit) {
			return (
				<div>
					<button onClick={this.handleOnClick}>Add</button>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

export default NewBtn;

NewBtn.defaultProps = {
	canEdit: true,
};
