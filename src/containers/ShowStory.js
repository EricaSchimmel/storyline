import React, { Component } from "react";

import NavBar from "../components/NavBar";

import history from "../modules/history";

import { logout } from "../redux/actions/user";
import { fetchStory } from "../redux/actions/story";
import { connect } from "react-redux";

class ShowStory extends Component {
	componentDidMount() {
		let { match } = this.props;
		let storyId = match.params.id;
		this.props.fetchStory(storyId);
	}

	render() {
		return (
			<div>
				<NavBar
					currentUser={this.props.currentUser}
					logout={this.props.logout}
					history={history}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		story: state.viewedStory.story,
		characters: state.viewedStory.characters,
		comments: state.viewedStory.comments,
		canComment: state.viewedStory.canComment,
		loading: state.viewedStory.loading,
	};
};

export default connect(mapStateToProps, { logout })(ShowStory);
