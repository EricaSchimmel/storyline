import axios from "axios";

export const addCharacter = data => {
	return { type: "ADD_CHARACTER", data };
};

export const fetchCharacter = characterId => {
	return dispatch => {
		dispatch({ type: "LOADING_CHARACTER" });

		return axios.get(`/characters/${characterId}`).then(data => {
			dispatch(addCharacter(data.data));
			return data;
		});
	};
};

export const fetchUserCharacters = userId => {
	return dispatch => {
		dispatch({ type: "LOADING_CHARACTER" });

		return axios.get(`/users/${userId}/characters`);
	};
};
