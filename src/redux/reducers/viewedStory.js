export default function viewedStory(
	state = { story: {}, comments: [], canComment: false, loading: false },
	action
) {
	switch (action.type) {
		case "LOADING_STORY":
			return {
				...state,
				story: { ...state.story },
				comments: [...state.comments],
				canComment: state.canComment,
				loading: true,
			};

		case "ADD_STORY":
			return {
				...state,
				story: action.data.story,
				comments: action.data.comments,
				canComment: action.data.canComment,
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

			break;
	}
}
