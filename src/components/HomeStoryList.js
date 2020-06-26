import React, { Component } from "react";
import StoryCard from "./StoryCard";
import axios from "axios";

class HomeStoryList extends Component {
	state = {
		stories: [],
	};

	getStories() {
		axios.get("/stories").then(res => {
			console.log(res);
			this.setState({
				stories: res.data,
			});
		});
	}

	componentDidMount() {
		this.getStories();
	}

	render() {
		const storyCards = this.state.stories.map(story => {
			return <StoryCard title={story.title} username={story.user.username} />;
		});

		return <div>{storyCards}</div>;
	}
}

export default HomeStoryList;
