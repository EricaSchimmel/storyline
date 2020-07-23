import React, { Component } from "react";

import StoryInput from "../../components/stories/StoryInput";

import { requireLogin } from "../../helpers/componentHelpers";

import { postStory } from "../../redux/actions/story";
import { connect } from "react-redux";

class NewStory extends Component {
	componentDidMount() {
		requireLogin(this.props.currentUser);
	}

	render() {
		return (
			<div>
				<h1>New Story</h1>
				<StoryInput action={this.props.postStory} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { postStory })(NewStory);
