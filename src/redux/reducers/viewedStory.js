export default function viewedStory(
	state = {
		story: {},
		user: {},
		characters: [],
		comments: [],
		canComment: false,
		canEdit: false,
		loading: false,
	},
	action
) {
	switch (action.type) {
		case "LOADING_STORY":
			return {
				...state,
				story: { ...state.story },
				user: { ...state.user },
				characters: [...state.characters],
				comments: [...state.comments],
				canComment: state.canComment,
				canEdit: state.canEdit,
				loading: true,
			};

		case "ADD_STORY":
			return {
				...state,
				story: action.data.story,
				user: action.data.user,
				characters: action.data.characters,
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
