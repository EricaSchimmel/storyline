import React from "react";

export const requireLogin = userState => {
	if (!userState.loggedIn) {
		return this.props.history.push("/login");
	}
};

export const redirectToHomeWhenLoggedIn = userState => {
	if (userState.loggedIn) {
		return this.props.history.push("/");
	}
};
