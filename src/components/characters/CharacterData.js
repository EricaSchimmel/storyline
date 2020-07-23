import React, { Component } from "react";
import { Link } from "react-router-dom";

class CharacterData extends Component {
	renderPersonality = () => {
		if (this.props.character.personality) {
			return (
				<>
					<h3>Personality</h3>
					<p>{this.props.character.personality}</p>
				</>
			);
		}
	};

	renderOverview = () => {
		if (this.props.character.overview) {
			return (
				<>
					<h3>Overview</h3>
					<p>{this.props.character.overview}</p>
				</>
			);
		}
	};

	render() {
		if (!this.props.story) {
			return <div></div>;
		} else {
			return (
				<div>
					<h1>{this.props.character.name}</h1>

					<h2>
						From{" "}
						<Link to={`/stories/${this.props.story.id}`}>
							{this.props.story.title}
						</Link>
						, created by: {this.props.user.username}
					</h2>

					<h3>Character Details</h3>
					<ul>
						<li>
							<strong>Age:</strong> {this.props.character.age} years old
						</li>

						<li>
							<strong>Gender:</strong> {this.props.character.gender}
						</li>

						<li>
							<strong>Species:</strong> {this.props.character.species}
						</li>
					</ul>

					{this.renderPersonality()}
					{this.renderOverview()}
				</div>
			);
		}
	}
}

export default CharacterData;
