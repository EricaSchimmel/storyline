import React, { Component } from "react";

class CharacterData extends Component {
	renderPersonality = () => {
        if (this.props.character.personality !== "") {
            return (
                <h3>Personality</h3>
                <p>{this.props.character.personality}</p>
            )
        }
    };

	renderOverview = () => {
        if (this.props.character.overview !== "") {
            return (
                <h3>Overview</h3>
                <p>{this.props.character.overview}</p>
            )
        }
    };

	render() {
		return (
			<div>
				<h1>{this.props.character.name}</h1>

				<h2>
					From {this.props.story.title}, created by: {this.props.user.username}
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

                {this.renderPersonality}
                {this.renderOverview}
			</div>
		);
	}
}

export default CharacterData;
