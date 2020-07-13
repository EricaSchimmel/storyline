import axios from "axios";

export const setUser = data => {
	return { type: "SET_USER", data };
};

export const login = state => {
	return dispatch => {
		return axios.post("/login", state).then(res => {
			if (!res.data.errors) {
				dispatch(setUser(res.data));
			}
			return res;
		});
	};
};

export const signup = state => {
	return dispatch => {
		return axios.post("/signup", state).then(res => {
			if (!res.data.errors) {
				dispatch(setUser(res.data));
			}
			return res;
		});
	};
};

export const logout = () => {
	return dispatch => {
		return axios.delete("/logout").then(() => {
			dispatch({ type: "LOGOUT" });
		});
	};
};
