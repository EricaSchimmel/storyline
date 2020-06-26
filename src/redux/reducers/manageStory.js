export default function manageStory(state = { stories: [] }, action) {
	switch (action.type) {
		case "ADD_STORY":
			const story = {
				id: action.id,
				user_id: action.user_id,
				title: action.title,
				summary: action.summary,
			};

			return { ...state, stories: [...state.stories, story] };

		case "DELETE_STORY":
			const stories = state.stories.filter(story => story.id !== action.id);
			return { ...state, stories: [stories] };

		case "ADD_COMMENT":
			break;

		default:
			return state;
	}
}
