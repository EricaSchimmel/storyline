import storage from "redux-persist/lib/storage";

export default function manageUser(
	state = { user: {}, loggedIn: false },
	action
) {
	switch (action.type) {
		case "SET_USER":
			if (action.data.errors) {
				return state;
			} else {
				return { ...state, user: action.data.user, loggedIn: true };
			}

		case "LOGOUT":
			storage.removeItem("persist:root");
			return { ...state, user: {}, loggedIn: false };

		default:
			return state;
	}
}
