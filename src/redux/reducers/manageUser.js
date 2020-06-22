export default function manageUser(state = {}, action) {
	switch (action.type) {
		case "SET_USER":
			localStorage.setItem("currentUser", JSON.stringify(action.user));
			return action.user;

		case "LOGOUT":
			localStorage.removeItem("currentUser");
			return {};

		default:
			return state;
	}
}
