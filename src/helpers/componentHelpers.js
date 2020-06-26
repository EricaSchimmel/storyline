import React from "react";
import { Redirect } from "react-router-dom";

export const requireLogin = userState => {
	if (!userState.loggedIn) {
		return <Redirect to="/login" />;
	}
};

export const redirectToHomeWhenLoggedIn = userState => {
	if (userState.loggedIn) {
		return <Redirect to="/" />;
	}
};
