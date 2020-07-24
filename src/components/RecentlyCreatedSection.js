import React, { Component } from "react";

import CharacterList from "./characters/CharacterList";
import StoryList from "./stories/StoryList";

import { Link } from "react-router-dom";

class RecentlyCreatedSection extends Component {
	renderStoryHeader = () => {
		if (this.props.userId) {
			return (
				<>
					<h2>
						Recently Created Stories{" "}
						<Link to={`/users/${this.props.userId}/stories`}>See More</Link>
					</h2>
				</>
			);
		} else {
			return (
				<>
					<h2>
						Recently Created Stories <Link to={`/stories`}>See More</Link>
					</h2>
				</>
			);
		}
	};

	renderCharacterHeader = () => {
		if (this.props.userId) {
			return (
				<>
					<h2>
						Recently Created Characters{" "}
						<Link to={`/users/${this.props.userId}/characters`}>See More</Link>
					</h2>
				</>
			);
		} else {
			return (
				<>
					<h2>
						Recently Created Characters <Link to={"/characters"}>See More</Link>
					</h2>
				</>
			);
		}
	};

	render() {
		return (
			<div>
				{this.renderStoryHeader()}
				<StoryList stories={this.props.stories} />

				{this.renderCharacterHeader()}
				<CharacterList characters={this.props.characters} />
			</div>
		);
	}
}

export default RecentlyCreatedSection;
