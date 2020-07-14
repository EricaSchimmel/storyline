import React, { Component } from "react";

import StoryList from "../components/stories/StoryList";
import CharacterList from "../components/characters/CharacterList";

import { fetchRecentlyCreatedStories } from "../redux/actions/story";
import { fetchRecentlyCreatedCharacters } from "../redux/actions/character";
import { connect } from "react-redux";

class Home extends Component {
	componentDidMount() {
		this.props.fetchRecentlyCreatedStories();
		this.props.fetchRecentlyCreatedCharacters();
	}

	render() {
		if (this.props.loadingStories || this.props.loadingCharacters) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else {
			return (
				<div>
					<h1>Recently Posted Stories</h1>
					<StoryList stories={this.props.stories} />

					<h1>Recently Created Characters</h1>
					<CharacterList characters={this.props.characters} />
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		stories: state.storyIndex.stories,
		characters: state.characterIndex.characters,
		loadingStories: state.storyIndex.loading,
		loadingCharacters: state.characterIndex.loading,
	};
};

export default connect(mapStateToProps, {
	fetchRecentlyCreatedStories,
	fetchRecentlyCreatedCharacters,
})(Home);
