export default function manageComments(
	state = { comments: [], canComment: false, loading: false },
	action
) {
	switch (action.type) {
		case "LOADING_COMMENTS":
			return {
				...state,
				comments: [...state.comments],
				canComment: state.canComment,
				loading: true,
			};

		case "ADD_COMMENTS":
			return {
				...state,
				comments: action.data.comments,
				canComment: action.data.canComment,
				loading: false,
			};

		case "ADD_COMMENT":
			const comment = {
				id: action.id,
				content: action.content,
				user: action.user,
			};

			return { ...state, comments: [...state.comments, comments] };

		default:
			return state;
	}
}
