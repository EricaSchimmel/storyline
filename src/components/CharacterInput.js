import React, { Component } from "react";
import Errors from "./Errors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { addCharacter } from "../redux/actions/manageCharacter";

class CharacterInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.character.name,
			age: this.props.character.age,
			gender: this.props.character.gender,
			species: this.props.character.species,
			overview: this.props.character.overview,
			personality: this.props.character.personality,
		};
	}

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<div>
				<form>
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
