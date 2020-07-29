import React, { Component } from "react";

import StoryList from "../../components/stories/StoryList";

import { fetchStories } from "../../redux/actions/story";
import { connect } from "react-redux";

class StoryIndex extends Component {
	componentDidMount() {
		this.props.fetchStories();
	}

	render() {
		if (this.props.loading) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else {
			return (
				<div>
					<h1>All Stories</h1>
					<StoryList stories={this.props.stories} />
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		stories: state.storyIndex.stories,
		loading: state.storyIndex.loading,
	};
};

export default connect(mapStateToProps, { fetchStories })(StoryIndex);
