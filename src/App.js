import React, { Component } from "react";
import "./stylesheets/App.css";
import Home from "./components/containers/Home";
import LoginContainer from "./components/containers/LoginContainer";
import SignUpContainer from "./components/containers/SignUpContainer";
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
