export default function viewedStory(
	state = { story: {}, comments: [], canComment: false },
	action
) {
	switch (action.type) {
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
