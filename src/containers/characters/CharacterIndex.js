import React, { Component } from "react";

import CharacterList from "../../components/characters/CharacterList";

import { fetchIndexCharacters } from "../../redux/actions/character";
import { connect } from "react-redux";

class CharacterIndex extends Component {
	componentDidMount() {
		this.props.fetchIndexCharacters();
	}

	render() {
		if (this.props.loading) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else {
			return (
				<div>
					<h1>All Characters</h1>
					<CharacterList characters={this.props.characters} />
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		characters: state.characterIndex.characters,
		loading: state.characterIndex.loading,
	};
};

export default connect(mapStateToProps, { fetchIndexCharacters })(
	CharacterIndex
);
