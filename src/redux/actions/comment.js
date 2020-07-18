import axios from "axios";

export const fetchComments = (objType, objId) => {
	return axios.get(`/${objType}/${objId}/comments`);
};

export const postComment = (objType, objId, data) => {
	return axios.post(`/${objType}/${objId}/comments`, data);
};
