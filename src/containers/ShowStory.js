import React, { Component } from "react";

import NavBar from "../components/NavBar";

import history from "../modules/history";

import { logout } from "../redux/actions/user";
import { connect } from "react-redux";

class ShowStory extends Component {
	componentDidMount() {
		let { match } = this.props;
		let storyId = match.params.id;
	}

	render() {
		let { match } = this.props;
		let storyId = match.params.id;
		console.log(storyId);

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
	};
};

export default connect(mapStateToProps, { logout })(ShowStory);
