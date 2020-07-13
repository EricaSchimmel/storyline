import axios from "axios";

export const fetchCharacter = characterId => {
	return dispatch => {
		dispatch({ type: "LOADING_CHARACTER" });

		return axios.get(`/characters/${characterId}`).then(data => {
			dispatch(addCharacter(data.data));
			return data;
		});
	};
};
