import axios from "axios";

/*********************************
 *    Title: Get By Regex Value
 *    Source: https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
 *********************************/

const getCookie = cookieName => {
	// Match the cookie with regex
	let cookieMatch = document.cookie.match(
		"(^|;)\\s*" + cookieName + "\\s*=\\s*([^;]+)"
	);

	// Return the cookie if a match is found
	return cookieMatch ? cookieMatch.pop() : "";
};

export const setUser = user => {
	return { type: "SET_USER", user };
};

export const login = state => {
	return dispatch => {
		return axios.post("/login", state).then(resp => {
			if (resp.data.user) {
				dispatch(setUser(resp.data.user));
			} else {
				dispatch(setUser("@@INIT"));
			}
		});
	};
};

export const logout = () => {
	return dispatch => {
		dispatch({ type: "LOGOUT" });
	};
};
