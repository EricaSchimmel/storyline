import React, { Component } from "react";

import NavBar from "../components/NavBar";
import StoryList from "../components/stories/StoryList";
import CharacterList from "../components/characters/CharacterList";

import history from "../modules/history";

import { logout } from "../redux/actions/user";
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
					<NavBar
						currentUser={this.props.currentUser}
						logout={this.props.logout}
						history={history}
					/>

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
		currentUser: state.currentUser,
		stories: state.storyIndex.stories,
		characters: state.characterIndex.characters,
		loadingStories: state.storyIndex.loading,
		loadingCharacters: state.characterIndex.loading,
	};
};

export default connect(mapStateToProps, {
	logout,
	fetchRecentlyCreatedStories,
	fetchRecentlyCreatedCharacters,
})(Home);
