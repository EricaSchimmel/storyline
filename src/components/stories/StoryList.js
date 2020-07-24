import React, { Component } from "react";

import StoryCard from "./StoryCard";
import EditBtn from "../buttons/EditBtn";
import DeleteBtn from "../buttons/DeleteBtn";

class StoryList extends Component {
	render() {
		const storyCards = this.props.stories.map(story => {
			if (this.props.canEdit) {
				return (
					<>
						<StoryCard
							story={story}
							key={story.id}
							displayUser={this.props.displayUser}
						/>

						<EditBtn objType="story" objId={story.id} />
						<DeleteBtn element={story} delete={this.props.deleteAction} />
					</>
				);
			} else {
				return (
					<StoryCard
						story={story}
						key={story.id}
						displayUser={this.props.displayUser}
					/>
				);
			}
		});

		return <div>{storyCards}</div>;
	}
}

export default StoryList;

StoryList.defaultProps = {
	canEdit: false,
};
