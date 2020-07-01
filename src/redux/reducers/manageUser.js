import storage from "redux-persist/lib/storage";

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
				console.log(action.data.user);

				console.log(`Logging in: ${action.data.user.username}`);

				return { ...state, user: action.data.user, loggedIn: true };
			}

		case "LOGOUT":
			storage.removeItem("persist:root");
			return { ...state, user: {}, loggedIn: false };

		default:
			return state;
	}
}
