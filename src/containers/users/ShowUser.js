import React, { Component } from "react";

import RecentlyCreatedSection from "../../components/RecentlyCreatedSection";

import { fetchUser } from "../../redux/actions/user";
import { fetchRecentlyCreatedStories } from "../../redux/actions/story";
import { fetchRecentlyCreatedCharacters } from "../../redux/actions/character";
import { connect } from "react-redux";

class ShowUser extends Component {
	componentDidMount() {
		let { match } = this.props;
		let userId = match.params.id;

		this.props.fetchUser(userId);
		this.props.fetchRecentlyCreatedCharacters(userId);
		this.props.fetchRecentlyCreatedStories(userId);
	}
	render() {
		if (
			this.props.loadingUser ||
			this.props.loadingCharacters ||
			this.props.loadingStories
		) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else {
			return (
				<div>
					<h1>{this.props.viewedUser.username}</h1>
					<RecentlyCreatedSection
						stories={this.props.stories}
						characters={this.props.characters}
						displayUser={false}
						userId={this.props.viewedUser.id}
					/>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		viewedUser: state.viewedUser.user,
		stories: state.storyIndex.stories,
		characters: state.characterIndex.characters,
		loadingUser: state.viewedUser.loading,
		loadingStories: state.storyIndex.loading,
		loadingCharacters: state.characterIndex.loading,
	};
};

export default connect(mapStateToProps, {
	fetchRecentlyCreatedStories,
	fetchRecentlyCreatedCharacters,
	fetchUser,
})(ShowUser);
