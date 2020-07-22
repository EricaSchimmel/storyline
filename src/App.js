import React, { Component } from "react";
import "./stylesheets/App.css";

import Nav from "./containers/Nav";

import Home from "./containers/Home";
import LoginContainer from "./containers/users/LoginContainer";
import SignUpContainer from "./containers/users/SignUpContainer";

import Dashboard from "./containers/users/Dashboard";
import DashboardStories from "./containers/users/DashboardStories";

import ShowStory from "./containers/stories/ShowStory";
import ShowCharacter from "./containers/characters/ShowCharacter";

import NewStory from "./containers/stories/NewStory";

import { Router, Route, Switch } from "react-router-dom";
import history from "./modules/history";

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signup" component={SignUpContainer} />
					<Route exact path="/login" component={LoginContainer} />

					{/* User Pages */}
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/dashboard/stories" component={DashboardStories} />
					{/* <Route path="/users/:id" component={} /> */}
					{/* <Route path="/users/:id/stories" component={} /> */}
					{/* <Route path="/users/:id/characters" component={} /> */}

					{/* Stories */}
					<Route strict path="/stories/new" component={NewStory} />
					<Route path="/stories/:id" component={ShowStory} />
					{/* <Route path="/stories/:id/edit" component={} /> */}

					{/* Characters */}
					<Route path="/characters/:id" component={ShowCharacter} />
					{/* <Route path="/stories/:story_id/characters/new" component={} /> */}
					{/* <Route path="/characters/:id/edit" component={} /> */}
				</Switch>
			</Router>
		);
	}
}

export default App;
