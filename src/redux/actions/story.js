import axios from "axios";

export const createStory = data => {
	return { type: "ADD_STORY", data };
};

export const addStory = state => {
	return dispatch => {
		return axios.post("/stories", state).then(data => {
			createStory(data);
		});
	};
};

export const updateStory = state => {
	return axios.patch(`/stories/${state.story.id}`);
};

// export const deleteStory = state ={
//     return dispatch => {
//         return axios.delete(`/stories/${state.story.id}`);
//     }
// }
