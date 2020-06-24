import React, { Component } from "react";
import "./stylesheets/App.css";
import Home from "./components/containers/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/login" exact component={Login} />
				{/* <Route path="/dashboard" exact component={} />
				<Route path="/stories" component={} />
				<Route path="/characters" component={} /> */}
			</BrowserRouter>
		);
	}
}

export default App;
