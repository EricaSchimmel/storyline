import React, { Component } from "react";
import Errors from "../errors/Errors";

import history from "../../modules/history";

class CharacterInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.character.name,
			age: props.character.age,
			gender: props.character.gender,
			species: props.character.species,
			overview: props.character.overview,
			personality: props.character.personality,
			errors: [],
		};
	}

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleOnSubmit = event => {
		event.preventDefault();

		const { name, age, gender, species, overview, personality } = this.state;

		let character = {
			name,
			age,
			gender,
			species,
			overview,
			personality,
		};

		if (this.props.actionType === "new") {
			this.props.action(character, this.props.storyId).then(res => {
				if (res.data.errors) {
					this.setState({
						errors: res.data.errors,
					});
				} else {
					history.push(`/characters/${res.data.id}`);
				}
			});
		} else if (this.props.actionType === "edit") {
			this.props.action(character, this.props.characterId).then(res => {
				if (res.data.errors) {
					this.setState({ errors: res.data.errors });
				} else {
					history.push(`/characters/${res.data.id}`);
				}
			});
		}
	};

	render() {
		return (
			<div>
				<Errors errors={this.state.errors} />

				<form onSubmit={this.handleOnSubmit}>
					<label>Name</label>
					<br />
					<input
						type="text"
						id="name"
						name="name"
						onChange={this.handleOnChange}
						value={this.state.name}
					/>
					<br />

					<label>Age</label>
					<br />
					<input
						type="number"
						id="age"
						name="age"
						min="0"
						onChange={this.handleOnChange}
						value={this.state.age}
					/>
					<br />

					<label>Gender</label>
					<br />
					<select
						value={this.state.gender}
						onChange={this.handleOnChange}
						name="gender"
						id="gender"
					>
						<option value="Male" defaultValue>
							Male
						</option>
						<option value="Female">Female</option>
						<option value="Other">Other</option>
					</select>
					<br />

					<label>Species</label>
					<br />
					<input
						type="text"
						id="species"
						name="species"
						onChange={this.handleOnChange}
						value={this.state.species}
					/>
					<br />

					<label>Personality</label>
					<br />
					<textarea
						name="personality"
						id="personality"
						value={this.state.personality}
						onChange={this.handleOnChange}
					/>
					<br />

					<label>Overview of Character</label>
					<br />
					<textarea
						name="overview"
						id="overview"
						value={this.state.overview}
						onChange={this.handleOnChange}
					/>
					<br />

					<input type="submit" value="Submit Character" />
				</form>
			</div>
		);
	}
}

export default CharacterInput;

CharacterInput.defaultProps = {
	actionType: "new",

	character: {
		name: "",
		age: 0,
		gender: "",
		species: "",
		overview: "",
		personality: "",
	},
};
