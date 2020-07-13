export default function viewedCharacter(
	state = {
		character: {},
		user: {},
		story: {},
		comments: [],
		canComment: false,
		canEdit: false,
		loading: false,
	},
	action
) {
	switch (action.type) {
		case "LOADING_CHARACTER":
			return {
				...state,
				character: { ...state.character },
				user: { ...state.user },
				story: { ...state.story },
				comments: [...state.comments],
				canComment: state.canComment,
				canEdit: state.canEdit,
				loading: true,
			};

		case "ADD_CHARACTER":
			return {
				...state,
				character: action.data.character,
				user: action.data.user,
				story: action.data.story,
				comments: action.data.comments,
				canComment: action.data.canComment,
				canEdit: action.data.canEdit,
				loading: false,
			};

		case "ADD_COMMENT":
			const comment = {
				id: action.id,
				user_id: action.user_id,
				content: action.content,
				commentable_type: action.commentable_type,
				commentable_id: action.commentable_id,
			};

			return {
				...state,
				comments: [...state.comments, comment],
			};

		default:
			return state;
	}
}
