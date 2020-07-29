import React, { Component } from "react";

import CharacterList from "../../components/characters/CharacterList";
import NotFound from "../../components/errors/NotFound";

import { Link } from "react-router-dom";

import { fetchUser } from "../../redux/actions/user";
import { fetchCharacters } from "../../redux/actions/character";
import { connect } from "react-redux";

class UserCharacters extends Component {
	componentDidMount() {
		let { match } = this.props;
		let userId = match.params.id;

		this.props.fetchUser(userId);
		this.props.fetchCharacters(userId);
	}

	renderCharacters = () => {
		if (this.props.characters.length !== 0) {
			return (
				<>
					<CharacterList
						characters={this.props.characters}
						displayUser={false}
					/>
				</>
			);
		} else {
			return (
				<>
					<h2>This user currently has no characters created currently.</h2>
				</>
			);
		}
	};

	render() {
		if (this.props.loadingUser || this.props.loadingCharacters) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else if (!this.props.viewedUser) {
			return (
				<>
					<NotFound />
				</>
			);
		} else {
			return (
				<div>
					<h1>
						<Link to={`/users/${this.props.viewedUser.id}`}>
							{this.props.viewedUser.username}
						</Link>
						's Characters
					</h1>
					{this.renderCharacters()}
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		viewedUser: state.viewedUser.user,
		characters: state.characterIndex.characters,
		loadingUser: state.viewedUser.loading,
		loadingCharacters: state.characterIndex.loading,
	};
};

export default connect(mapStateToProps, { fetchUser, fetchCharacters })(
	UserCharacters
);
