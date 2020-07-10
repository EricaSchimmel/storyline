import React, { Component } from "react";
import "./stylesheets/App.css";

import Home from "./containers/Home";
import LoginContainer from "./containers/LoginContainer";
import SignUpContainer from "./containers/SignUpContainer";

import { Router, Route } from "react-router-dom";
import history from "./modules/history";

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUpContainer} />
				<Route path="/login" exact component={LoginContainer} />

				{/* User Pages */}
				{/* <Route path="/dashboard" exact component={} /> */}
				{/* <Route path="/users/:id" component={} /> */}
				{/* <Route path="/users/:id/stories" component={} /> */}
				{/* <Route path="/users/:id/characters" component={} /> */}

				{/* Stories */}
				{/* <Route path="/stories/:id" component={} /> */}
				{/* <Route path="/stories/:id/new" component={} /> */}
				{/* <Route path="/stories/:id/edit" component={} /> */}

				{/* Characters */}
				{/* <Route path="/stories/:story_id/characters/new" component={} /> */}
				{/* <Route path="/characters/:id/edit" component={} /> */}
			</Router>
		);
	}
}

export default App;
