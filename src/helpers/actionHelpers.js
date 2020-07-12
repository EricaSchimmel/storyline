import axios from "axios";

// TODO: Add in edit and delete request
// TODO: Add in a action parameter to all requests here

export const storyPost = (storyId, objType) => {
	return dispatch => {
		return axios.post(`/stories/${storyId}/${objType}`, state).then(data => {
			return data.data;
		});
	};
};

export const postComment = (objType, objId) => {
	return dispatch => {
		return axios.post(`/${objType}/${objId}/comments`, state).then(data => {
			return data.data;
		});
	};
};
