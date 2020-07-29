import axios from "axios";

export const addStory = data => {
	debugger;
	return { type: "ADD_STORY", data };
};

export const addStories = data => {
	return { type: "ADD_STORIES", data };
};

export const removeStory = data => {
	debugger;
	return { type: "REMOVE_STORY", data };
};

export const fetchStories = (userId = -1) => {
	return dispatch => {
		dispatch({ type: "LOADING_STORIES" });

		let url = "/stories";

		if (userId !== -1) {
			url = `/users/${userId}/stories`;
		}

		return axios.get(url).then(data => {
			dispatch(addStories(data.data));
			return data;
		});
	};
};

export const fetchStory = storyId => {
	return dispatch => {
		dispatch({ type: "LOADING_STORY" });

		return axios.get(`/stories/${storyId}`).then(data => {
			dispatch(addStory(data.data));
			return data;
		});
	};
};

export const fetchRecentlyCreatedStories = (userId = -1) => {
	return dispatch => {
		dispatch({ type: "LOADING_STORIES" });

		let url = "/recently_created_stories";

		if (userId !== -1) {
			url = `/users/${userId}/recently_created_stories`;
		}

		return axios.get(url).then(data => {
			dispatch(addStories(data.data));
			return data;
		});
	};
};

export const postStory = state => {
	return dispatch => {
		return axios.post("/stories", state).then(res => {
			return res;
		});
	};
};

export const patchStory = (state, storyId) => {
	return dispatch => {
		return axios.patch(`/stories/${storyId}`, state).then(res => {
			return res;
		});
	};
};

export const deleteStory = story => {
	return dispatch => {
		return axios.delete(`/stories/${story.id}`).then(res => {
			if (!res.errors) {
				dispatch(removeStory(res.data));
			}

			return res;
		});
	};
};
