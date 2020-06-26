import { combineReducers } from "redux";
import manageUser from "./manageUser";
import manageStory from "./manageStory";
import manageCharacter from "./manageCharacter";

const rootReducer = combineReducers({
	currentUser: manageUser,
	userStories: manageStory,
	userCharacters: manageCharacter,
});

export default rootReducer;
