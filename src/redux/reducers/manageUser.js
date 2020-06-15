export default function manageUser(state = {}, action) {
	switch (action.type) {
		case "SET_USER":
			return action.payload;

		case "LOGOUT":
			return {};

		default:
			return state;
	}
}
