import axios from "axios";

// TODO: Add dispatch in to postComment

export const addComments = data => {
	return { type: "ADD_COMMENTS", data };
};

export const addComment = data => {
	return { type: "ADD_COMMENT", data };
};

export const fetchComments = (objType, objId) => {
	return dispatch => {
		dispatch({ type: "LOADING_COMMENTS" });
		return axios.get(`/${objType}/${objId}/comments`).then(res => {
			dispatch(addComments(res.data));
			return res;
		});
	};
};

export const postComment = (objType, objId, data) => {
	return dispatch => {
		return axios.post(`/${objType}/${objId}/comments`, data).then(res => {
			if (!res.data.errors) {
				dispatch(addComment(res.data));
			}

			return res;
		});
	};
};
