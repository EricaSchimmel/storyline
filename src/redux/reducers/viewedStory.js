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

		default:
			return state;
	}
}
