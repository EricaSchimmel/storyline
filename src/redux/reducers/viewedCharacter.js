export default function viewedCharacter(
	state = {
		character: {},
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
				canEdit: state.canEdit,
				loading: true,
			};

		case "ADD_CHARACTER":
			return {
				...state,
				character: action.data.character,
				canEdit: action.data.canEdit,
				loading: false,
			};

		default:
			return state;
	}
}
