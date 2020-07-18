import axios from "axios";

export const addComments = data => {
	return { type: "ADD_COMMENTS", data };
};

export const addComment = data => {
	return { type: "ADD_COMMENT", data };
};

export const fetchComments = (objType, objId) => {
	return dispatch => {
		return axios.get(`/${objType}/${objId}/comments`);
	};
};

export const postComment = (objType, objId, data) => {
	return dispatch => {
		return axios.post(`/${objType}/${objId}/comments`, data);
	};
};
