import axios from "axios";

export const addStory = data => {
	debugger;
	return { type: "ADD_STORY", data };
};

export const addStories = data => {
	return { type: "ADD_STORIES", data };
};

export const fetchIndexStories = () => {
	return dispatch => {
		dispatch({ type: "LOADING_STORIES" });

		return axios.get("/stories").then(data => {
			dispatch(addStories(data.data));
			return data;
		});
	};
};

export const fetchUserStories = user => {
	return dispatch => {
		dispatch({ type: "LOADING_STORIES" });

		return axios.get(`/users/${user.id}/stories`).then(data => {
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

export const fetchRecentlyCreatedStories = () => {
	return dispatch => {
		dispatch({ type: "LOADING_Stories" });

		return axios.get("/recently_created_stories").then(data => {
			dispatch(addStories(data.data));
			return data;
		});
	};
};
