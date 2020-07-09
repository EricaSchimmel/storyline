import React, { Component } from "react";
import "./stylesheets/App.css";
import Home from "./containers/Home";
import LoginContainer from "./containers/LoginContainer";
import SignUpContainer from "./containers/SignUpContainer";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUpContainer} />
				<Route path="/login" exact component={LoginContainer} />
				{/* <Route path="/dashboard" exact component={} />
				<Route path="/stories" component={} />
				<Route path="/characters" component={} /> */}
			</BrowserRouter>
		);
	}
}

export default App;
