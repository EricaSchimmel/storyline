import React, { Component } from "react";
import NavBar from "../components/NavBar";
import StoryList from "../components/StoryList";
import { logout } from "../redux/actions/user";
import { connect } from "react-redux";

class Home extends Component {
	render() {
		return (
			<div>
				<NavBar
					currentUser={this.props.currentUser}
					logout={this.props.logout}
				/>
				<h1>All Stories</h1>
				<StoryList />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
};

export default connect(mapStateToProps, { logout })(Home);
