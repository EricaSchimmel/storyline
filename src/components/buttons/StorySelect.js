import React, { Component } from "react";
import history from "../../modules/history";

class StorySelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			storyId: -1,
		};
	}

	handleOnChange = event => {
		this.setState({
			storyId: event.target.value,
		});
	};

	handleOnSubmit = event => {
		event.preventDefault();

		if (this.state.storyId !== -1) {
			history.push(`/stories/${this.state.storyId}/${this.props.objType}/new`);
		}
	};

	render() {
		let options = this.props.stories.map(story => {
			return (
				<option key={story.id} value={story.id}>
					{story.title}
				</option>
			);
		});

		return (
			<div>
				<form onSubmit={this.handleOnSubmit}>
					<label>Select a story:</label>
					<select onChange={this.handleOnChange}>
						<option value={-1} defaultValue>
							----
						</option>
						{options}
					</select>

					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

export default StorySelect;
