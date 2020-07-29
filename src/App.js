import React, { Component } from "react";
import "./stylesheets/App.css";

import Nav from "./containers/Nav";

import Home from "./containers/Home";
import LoginContainer from "./containers/users/LoginContainer";
import SignUpContainer from "./containers/users/SignUpContainer";

import ShowUser from "./containers/users/ShowUser";

import Dashboard from "./containers/users/Dashboard";
import DashboardStories from "./containers/users/DashboardStories";
import DashboardCharacters from "./containers/users/DashboardCharacters";

import StoryIndex from "./containers/stories/StoryIndex";
import ShowStory from "./containers/stories/ShowStory";
import EditStory from "./containers/stories/EditStory";
import NewStory from "./containers/stories/NewStory";

import CharacterIndex from "./containers/characters/CharacterIndex";
import ShowCharacter from "./containers/characters/ShowCharacter";
import NewCharacter from "./containers/characters/NewCharacter";
import EditCharacter from "./containers/characters/EditCharacter";

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
					<Route
						exact
						path="/dashboard/characters"
						component={DashboardCharacters}
					/>
					<Route strict path="/users/:id" component={ShowUser} />
					{/* <Route path="/users/:id/stories" component={} /> */}
					{/* <Route path="/users/:id/characters" component={} /> */}

					{/* Stories */}
					<Route exact path="/stories" component={StoryIndex} />
					<Route strict path="/stories/new" component={NewStory} />
					<Route path="/stories/:id/edit" component={EditStory} />
					<Route
						exact
						strict
						path="/stories/:storyId/characters/new"
						component={NewCharacter}
					/>
					<Route path="/stories/:id" component={ShowStory} />

					{/* Characters */}
					<Route exact path="/characters" component={CharacterIndex} />
					<Route
						exact
						strict
						path="/characters/:id/edit"
						component={EditCharacter}
					/>
					<Route strict path="/characters/:id" component={ShowCharacter} />
				</Switch>
			</Router>
		);
	}
}

export default App;
