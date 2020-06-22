import React, { Component } from "react";
import "./App.css";
import Home from "./components/containers/Home";
import Login from "./components/Login";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" exact component={Home} />
				{/* <Route path="/signup" exact component={} /> */}
				<Route path="/login" exact component={Login} />
			</BrowserRouter>
		);
	}
}

export default App;
