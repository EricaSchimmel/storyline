import axios from "axios";

export const addCharacter = data => {
	return { type: "ADD_CHARACTER", data };
};

export const addCharacters = data => {
	return { type: "ADD_CHARACTERS", data };
};

export const removeCharacter = data => {
	debugger;
	return { type: "REMOVE_CHARACTER", data };
};

export const fetchIndexCharacters = () => {
	return dispatch => {
		dispatch({ type: "LOADING_CHARACTERS" });

		return axios.get("/characters").then(data => {
			dispatch(addCharacters(data.data));
			return data;
		});
	};
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

export const fetchRecentlyCreatedCharacters = () => {
	return dispatch => {
		dispatch({ type: "LOADING_CHARACTERS" });

		return axios.get("/recently_created_characters").then(data => {
			dispatch(addCharacters(data.data));
			return data;
		});
	};
};

export const fetchStoryCharacters = storyId => {
	return dispatch => {
		dispatch({ type: "LOADING_CHARACTERS" });

		return axios.get(`/stories/${storyId}/characters`).then(res => {
			dispatch(addCharacters(res.data));
			return res;
		});
	};
};

export const deleteCharacter = character => {
	return dispatch => {
		return axios.delete(`/characters/${character.id}`).then(res => {
			if (!res.errors) {
				dispatch(removeCharacter(res.data));
			}

			return res;
		});
	};
};

export const postCharacter = (character, storyId) => {
	return dispatch => {
		return axios.post(`/stories/${storyId}/characters`, character).then(res => {
			return res;
		});
	};
};

export const patchCharacter = (character, characterId) => {
	return dispatch => {
		return axios.patch(`/characters/${characterId}`, character).then(res => {
			return res;
		});
	};
};
