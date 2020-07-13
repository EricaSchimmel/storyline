import axios from "axios";

export const postObj = (storyId, objType, data) => {
	return axios.post(`/stories/${storyId}/${objType}`, state);
};

export const postComment = (objType, objId, data) => {
	return axios.post(`/${objType}/${objId}/comments`, data);
};

export const patchObj = (objType, objId, data) => {
	return axios.patch(`/${objType}/${objId}`, data);
};

export const deleteObj = (objType, objId, data) => {
	return axios.delete(`/${objType}/${objId}`);
};
