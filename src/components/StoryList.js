import React, { Component } from "react";
import StoryCard from "./StoryCard";

class StoryList extends Component {
	render() {
		const storyCards = this.props.stories.map(story => {
			return <StoryCard story={story} />;
		});

		return <div>{storyCards}</div>;
	}
}

export default StoryList;
