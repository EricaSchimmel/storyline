import history from "../modules/history";

export const requireLogin = userState => {
	if (!userState.loggedIn) {
		return history.push("/login");
	}
};

export const redirectToHomeWhenLoggedIn = userState => {
	if (userState.loggedIn) {
		return history.push("/");
	}
};
