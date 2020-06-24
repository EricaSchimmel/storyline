import { combineReducers } from "redux";
import manageUser from "./manageUser";
import manageStory from "./manageStory";
import manageCharacter from "./manageCharacter";

const rootReducer = combineReducers({
	manageUser,
	manageStory,
	manageCharacter,
});

export default rootReducer;
