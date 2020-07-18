import React, { Component } from "react";
import Errors from "../errors/Errors";

// TODO: Add in action prop for edit or add

class StoryInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.story.title,
			summary: this.props.story.summary,
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
			story: { title, summary },
		};

		this.props.action(story).then(res => {
			if (res.data.errors) {
				this.setState({
					errors: res.data.errors,
				});
			} else {
				return this.props.history.push("/");
			}
		});
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
	story: {
		title: "",
		summary: "",
	},
};
