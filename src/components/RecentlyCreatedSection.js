import React, { Component } from "react";

import CharacterList from "./characters/CharacterList";
import StoryList from "./stories/StoryList";

import { Link } from "react-router-dom";

class RecentlyCreatedSection extends Component {
	renderStoryHeader = () => {
		let seeMoreLink = "";

		if (this.props.userId) {
			seeMoreLink = (
				<Link to={`/users/${this.props.userId}/stories`}>See More</Link>
			);
		} else if (this.props.stories.length !== 0) {
			seeMoreLink = <Link to={`/stories`}>See More</Link>;
		}

		return (
			<>
				<h2>Recently Created Stories {seeMoreLink}</h2>
			</>
		);
	};

	renderCharacterHeader = () => {
		let seeMoreLink = "";

		if (this.props.userId) {
			seeMoreLink = (
				<Link to={`/users/${this.props.userId}/characters`}>See More</Link>
			);
		} else if (this.props.characters.length !== 0) {
			seeMoreLink = <Link to={`/characters`}>See More</Link>;
		}

		return (
			<>
				<h2>Recently Created Characters {seeMoreLink}</h2>
			</>
		);
	};

	renderStories = () => {
		if (this.props.stories.length !== 0) {
			return (
				<>
					<StoryList
						stories={this.props.stories}
						displayUser={this.props.displayUser}
					/>
				</>
			);
		} else if (this.props.stories.length === 0 && this.props.isHomepage) {
			return (
				<>
					<h2>
						There are no newly created stories at this time. To see all stories,{" "}
						<Link to={`/stories`}>click here</Link>.
					</h2>
				</>
			);
		} else {
			return (
				<>
					<h2>There are no newly created stories at this time.</h2>
				</>
			);
		}
	};

	renderCharacters = () => {
		if (this.props.characters.length !== 0) {
			return (
				<>
					<CharacterList
						characters={this.props.characters}
						displayUser={this.props.displayUser}
					/>
				</>
			);
		} else if (this.props.characters.length === 0 && this.props.isHomepage) {
			return (
				<>
					<h2>
						There are no newly created characters at this time. To see all
						characters, <Link to={`/characters`}>click here</Link>.
					</h2>
				</>
			);
		} else {
			return (
				<>
					<h2>There are no newly created characters at this time.</h2>
				</>
			);
		}
	};

	render() {
		return (
			<div>
				{this.renderStoryHeader()}
				{this.renderStories()}

				{this.renderCharacterHeader()}
				{this.renderCharacters()}
			</div>
		);
	}
}

export default RecentlyCreatedSection;

RecentlyCreatedSection.defaultProps = {
	displayUser: true,
	isHomepage: false,
};
