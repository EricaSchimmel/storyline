import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.withCredentials = true;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={rootReducer}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
