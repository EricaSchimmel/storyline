import { combineReducers } from "redux";
import manageUser from "./manageUser";
import manageStory from "./manageStory";
import manageCharacter from "./manageCharacter";

const rootReducer = combineReducers({
	currentUser: manageUser,
	stories: manageStory,
	characters: manageCharacter,
});

export default rootReducer;
