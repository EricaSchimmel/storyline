import React, { Component } from "react";
import Errors from "../errors/Errors";

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

		character = {
			name,
			age,
			gender,
			species,
			overview,
			personality,
		};

		if (this.props.actionType === "new") {
			this.props.action(this.props.objId, "characters", character).then(res => {
				if (res.data.errors) {
					this.setState({
						errors: res.data.errors,
					});
				} else {
					this.history.push(`/characters/${res.data.id}`);
				}
			});
		} else if (this.props.actionType === "edit") {
			this.props.action("characters", this.props.objId, character).then(res => {
				if (res.data.errors) {
					this.setState({ errors: res.data.errors });
				} else {
					this.props.history.push(`/characters/${res.data.id}`);
				}
			});
		}
	};

	render() {
		return (
			<div>
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
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Other">Other</option>
					</select>
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

					<input type="submit" value="Add Character" />
				</form>
			</div>
		);
	}
}

export default CharacterInput;

CharacterInput.defaultProps = {
	character: {
		name: "",
		age: 0,
		gender: "",
		species: "",
		overview: "",
		personality: "",
	},
};
