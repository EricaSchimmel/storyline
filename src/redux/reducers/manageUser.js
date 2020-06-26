export default function manageUser(state = { loggedIn: false }, action) {
	switch (action.type) {
		case "SET_USER":
			if (action.data.errors) {
				console.log("Errors found.");
				return state;
			} else {
				let user = action.data.user;

				console.log(`Logging in: ${user.username}`);
				localStorage.setItem("currentUser", JSON.stringify(user));

				return { user, loggedIn: true };
			}
			break;

		case "LOGOUT":
			localStorage.removeItem("currentUser");
			return { loggedIn: false };
			break;

		default:
			return state;
	}
}
