export default function manageCharacter(state = { characters: [] }, action) {
	switch (action.type) {
		case "ADD_CHARACTER":
			const character = {
				id: action.id,
				story_id: action.story_id,
				user_id: action.user_id,
				name: action.name,
				age: action.age,
				gender: action.gender,
				species: action.species,
				personality: action.personality,
				overview: action.overview,
			};

			return { ...state, characters: [...state.characters, character] };

		case "REMOVE_CHARACTER":
			const characters = state.characters.filter(
				character => character.id !== action.id
			);
			return { ...state, characters: [characters] };

		default:
			return state;
	}
}
