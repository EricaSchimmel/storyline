import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" />
			</BrowserRouter>
		);
	}
}

export default App;
