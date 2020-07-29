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

export const fetchCharacters = (userId = -1) => {
	return dispatch => {
		dispatch({ type: "LOADING_CHARACTERS" });

		let url = "/characters";

		if (userId !== -1) {
			url = `/users/${userId}/characters`;
		}

		return axios.get(url).then(data => {
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

export const fetchRecentlyCreatedCharacters = (userId = -1) => {
	return dispatch => {
		dispatch({ type: "LOADING_CHARACTERS" });

		let url = "/recently_created_characters";

		if (userId !== -1) {
			url = `/users/${userId}/recently_created_characters`;
		}

		return axios.get(url).then(data => {
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
