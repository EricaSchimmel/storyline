import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/reducers/store";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.withCredentials = true;

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
