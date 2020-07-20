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
				id: action.data.id,
				content: action.data.content,
				user: action.data.user,
				created_at: action.data.created_at,
			};

			console.log(action.data);

			return { ...state, comments: [...state.comments, comment] };

		default:
			return state;
	}
}
