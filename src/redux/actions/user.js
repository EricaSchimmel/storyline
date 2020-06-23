import axios from "axios";

export const setUser = data => {
	return { type: "SET_USER", data };
};

export const login = state => {
	return dispatch => {
		return axios.post("/login", state).then(data => {
			setUser(data);
			return data;
		});
	};
};

export const signup = state => {
	return dispatch => {
		return axios.post("/signup", state).then(data => {
			setUser(data);
			return data;
		});
	};
};

export const logout = () => {
	return dispatch => {
		dispatch({ type: "LOGOUT" });
	};
};
