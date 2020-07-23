import React, { Component } from "react";

import StoryInput from "../../components/stories/StoryInput";
import NotFound from "../../components/errors/NotFound";

import { requireLogin } from "../../helpers/componentHelpers";

import { fetchStory, patchStory } from "../../redux/actions/story";
import { connect } from "react-redux";

class EditStory extends Component {
	componentDidMount() {
		let { match } = this.props;
		let storyId = match.params.id;
		this.props.fetchStory(storyId);
	}

	render() {
		if (this.props.loading) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else if (!this.props.story) {
			return <NotFound />;
		} else {
			return (
				<div>
					{requireLogin(this.props.currentUser)}

					<h1>Editing {this.props.story.title}</h1>
					<StoryInput
						actionType="edit"
						story={this.props.story}
						action={this.props.patchStory}
					/>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		story: state.viewedStory.story,
		canEdit: state.viewedStory.canEdit,
		loading: state.viewedStory.loading,
	};
};

export default connect(mapStateToProps, { fetchStory, patchStory })(EditStory);
