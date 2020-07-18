export default function viewedStory(
	state = {
		story: {},
		characters: [],
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
				characters: [...state.characters],
				canEdit: state.canEdit,
				loading: true,
			};

		case "ADD_STORY":
			return {
				...state,
				story: action.data.story,
				characters: action.data.characters,
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
				comments: [comment, ...state.comments],
			};

		default:
			return state;
	}
}
