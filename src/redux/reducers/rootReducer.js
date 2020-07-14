import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import manageUser from "./manageUser";
import manageStory from "./manageStory";
import manageCharacter from "./manageCharacter";
import viewedStory from "./viewedStory";
import viewedCharacter from "./viewedCharacter";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["currentUser"],
};

const rootReducer = combineReducers({
	currentUser: manageUser,
	storyIndex: manageStory,
	characterIndex: manageCharacter,
	viewedStory,
	viewedCharacter,
});

export default persistReducer(persistConfig, rootReducer);
