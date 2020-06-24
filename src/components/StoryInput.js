import React, { Component } from "react";
mport React, { Component } from "react";
import Errors from "./Errors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addStory } from "../redux/actions/manageStory";

class StoryInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "",
			summary: "",
		}
	}
	
	render() {
		return (
		<div>
			<form>
				<label>Title</label>
				<br />
				<input
					type="text"
					id="title"
					name="title"
					onChange={this.handleOnChange}
					value={this.state.title}
				/>
				<br />

				<label>Summary</label>
				<br />
				<textarea
					name="summary"
					id="summary"
					onChange={this.handleOnChange}
					value={this.state.summary}
				/>
				<br />

				<input type="submit" value="Submit Story" />
			</form>
		</div>
		);
	}
}

export default StoryInput;
