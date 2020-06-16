import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" exact component={} />
				<Route path="/signup" exact component={} />
				<Route path="/login" exact component={} />
			</BrowserRouter>
		);
	}
}

export default App;
