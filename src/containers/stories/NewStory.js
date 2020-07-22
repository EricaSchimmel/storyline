import React, { Component } from "react";

import StoryInput from "../../components/stories/StoryInput";

import { postStory } from "../../redux/actions/story";
import { connect } from "react-redux";

class NewStory extends Component {
	render() {
		return (
			<div>
				<h1>New Story</h1>
				<StoryInput action={this.props.postStory} />
			</div>
		);
	}
}

export default connect(null, { postStory })(NewStory);
