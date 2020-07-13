import axios from "axios";

export const addCharacter = data => {
	return { type: "ADD_CHARACTER", data };
};

export const addCharacters = data => {
	return { type: "ADD_CHARACTERS", data };
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
		dispatch({ type: "LOADING_CHARACTERS" });

		return axios.get(`/users/${userId}/characters`).then(data => {
			dispatch(addCharacters(data.data));
			return data;
		});
	};
};
