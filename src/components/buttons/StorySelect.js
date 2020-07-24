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

	handleOnSubmit = () => {
		history.push(`/stories/${this.state.storyId}/${this.props.objType}/new`);
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
					<select>{options}</select>

					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

export default StorySelect;
