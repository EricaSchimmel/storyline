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
				{/* <Route path="/dashboard" exact component={} />
				<Route path="/stories" component={} />
				<Route path="/characters" component={} /> */}
			</Router>
		);
	}
}

export default App;
