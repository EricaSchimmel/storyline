export default function manageStory(
	state = { homepage: [], dashboard: [], viewedUser: [] },
	action
) {
	switch (action.type) {
		case "ADD_STORY":
			const story = {
				id: action.id,
				user_id: action.user_id,
				title: action.title,
				summary: action.summary,
			};

			return { ...state, dashboard: [...state.dashboard, story] };

		case "DELETE_STORY":
			const stories = state.dashboard.filter(story => story.id !== action.id);
			return { ...state, dashboard: [stories] };

		case "ADD_COMMENT":
			break;

		default:
			return state;
	}
}
