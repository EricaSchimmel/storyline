import axios from "axios";

export const addStory = data => {
	return { type: "ADD_STORY", data };
};

export const addStories = data => {
	return { type: "ADD_STORIES", data };
};

export const createStory = state => {
	return dispatch => {
		return axios.post("/stories", state).then(data => {
			createStory(data);
		});
	};
};

export const updateStory = state => {
	return axios.patch(`/stories/${state.story.id}`, state);
};

export const createComment = data => {
	return { type: "ADD_COMMENT", data };
};

export const addComment = state => {
	return dispatch => {
		return axios
			.post(`/stories/${state.story.id}/comments`, state.comment)
			.then(data => {
				createComment(data);
			});
	};
};

export const fetchIndexStories = () => {
	return dispatch => {
		dispatch({ type: "LOADING_STORIES" });
		return axios.get("/stories").then(data => {
			addStories(data);
		});
	};
};

export const fetchUserStories = user => {
	return dispatch => {
		dispatch({ type: "LOADING_STORIES" });
		return axios.get(`/stories/${user.id}`).then(data => {
			addStories(data);
		});
	};
};

// export const deleteStory = state ={
//     return dispatch => {
//         return axios.delete(`/stories/${state.story.id}`);
//     }
// }
