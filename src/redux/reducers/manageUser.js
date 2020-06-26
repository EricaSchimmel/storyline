export default function manageUser(
	state = { user: {}, loggedIn: false },
	action
) {
	switch (action.type) {
		case "SET_USER":
			if (action.data.errors) {
				console.log("Errors found.");
				return state;
			} else {
				// let user = action.user;
				console.log(action.data.user);

				console.log(`Logging in: ${action.data.user.username}`);
				// localStorage.setItem("currentUser", JSON.stringify(user));

				return { ...state, user: action.data.user, loggedIn: true };
			}

		case "LOGOUT":
			localStorage.removeItem("currentUser");
			return { ...state, user: {}, loggedIn: false };

		default:
			return state;
	}
}
