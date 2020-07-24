import React, { Component } from "react";

import StorySelect from "../../components/buttons/StorySelect";
import CharacterList from "../../components/characters/CharacterList";

import { requireLogin } from "../../helpers/componentHelpers";

import { Link } from "react-router-dom";

import { fetchUserStories } from "../../redux/actions/story";
import {
	fetchUserCharacters,
	deleteCharacter,
} from "../../redux/actions/character";
import { connect } from "react-redux";

class DashboardCharacters extends Component {
	componentDidMount() {
		requireLogin(this.props.currentUser);
		this.props.fetchUserCharacters(this.props.currentUser.user.id);
		this.props.fetchUserStories(this.props.currentUser.user);
	}

	render() {
		debugger;
		switch (true) {
			case this.props.loadingStories || this.props.loadingCharacters:
				return (
					<div>
						<h1>Loading...</h1>
					</div>
				);

			case this.props.stories.length === 0 &&
				this.props.characters.length === 0:
				return (
					<div>
						<h1>Your Characters</h1>
						<h2>
							You do not have any stories to add a character to. To create a
							story <Link to="/stories/new">click here</Link>.
						</h2>
					</div>
				);

			case this.props.characters.length === 0:
				return (
					<div>
						<h1>Your Characters</h1>
						<StorySelect stories={this.props.stories} objType="characters" />

						<h2>
							You do not currently have any characters. To add a character,
							select a story from the list and select add.
						</h2>
					</div>
				);

			default:
				return (
					<div>
						{requireLogin(this.props.currentUser)}

						<h1>Your Characters</h1>
						<StorySelect stories={this.props.stories} objType="characters" />

						<CharacterList
							characters={this.props.characters}
							canEdit={true}
							deleteAction={this.props.deleteCharacter}
						/>
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
		loadingCharacters: state.characterIndex.loading,
		loadingStories: state.storyIndex.loading,
	};
};

export default connect(mapStateToProps, {
	fetchUserCharacters,
	fetchUserStories,
	deleteCharacter,
})(DashboardCharacters);
