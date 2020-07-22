import React, { Component } from "react";

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

	// handleOnSubmit = () => {};

	render() {
		let options = this.props.stories.map(story => {
			return <option value={story.id}>{story.title}</option>;
		});

		return (
			<div>
				<form>
					<label for="stories">Select a story:</label>
					<select id="stories">{options}</select>

					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

export default StorySelect;
