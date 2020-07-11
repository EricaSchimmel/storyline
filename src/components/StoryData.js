import React, { Component } from "react";

export default class StoryData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			story: this.props.story,
			characters: this.props.characters,
			comments: this.props.characters,
			canComment: this.props.canComment,
		};
	}

	render() {
		return <div></div>;
	}
}
