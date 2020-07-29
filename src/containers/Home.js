import React, { Component } from "react";

import RecentlyCreatedSection from "../components/RecentlyCreatedSection";

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
					<RecentlyCreatedSection
						stories={this.props.stories}
						characters={this.props.characters}
						isHomepage={true}
					/>
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
