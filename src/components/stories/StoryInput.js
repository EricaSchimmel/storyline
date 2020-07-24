import React, { Component } from "react";
import Errors from "../errors/Errors";

import history from "../../modules/history";

class StoryInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.story.title,
			summary: props.story.summary,
			errors: [],
		};
	}

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleOnSubmit = event => {
		event.preventDefault();

		const { title, summary } = this.state;

		let story = {
			title,
			summary,
		};

		if (this.props.actionType === "new") {
			this.props.action(story).then(res => {
				if (res.data.errors) {
					this.setState({
						errors: res.data.errors,
					});
				} else {
					return history.push(`/stories/${res.data.id}`);
				}
			});
		} else if (this.props.actionType === "edit") {
			this.props.action(story, this.props.story.id).then(res => {
				if (res.data.errors) {
					this.setState({
						errors: res.data.errors,
					});
				} else {
					return history.push(`/stories/${res.data.id}`);
				}
			});
		}
	};

	render() {
		return (
			<div>
				<Errors errors={this.state.errors} />

				<form onSubmit={this.handleOnSubmit}>
					<label>Title</label>
					<br />
					<input
						type="text"
						id="title"
						name="title"
						onChange={this.handleOnChange}
						value={this.state.title}
					/>
					<br />

					<label>Summary</label>
					<br />
					<textarea
						name="summary"
						id="summary"
						onChange={this.handleOnChange}
						value={this.state.summary}
					/>
					<br />

					<input type="submit" value="Submit Story" />
				</form>
			</div>
		);
	}
}

export default StoryInput;

StoryInput.defaultProps = {
	actionType: "new",

	story: {
		title: "",
		summary: "",
	},
};
