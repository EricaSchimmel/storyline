import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import manageUser from "./manageUser";
import viewedUser from "./viewedUser";

import manageStory from "./manageStory";
import viewedStory from "./viewedStory";

import manageCharacter from "./manageCharacter";
import viewedCharacter from "./viewedCharacter";

import manageComments from "./manageComments";

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
	commentIndex: manageComments,
	viewedUser,
});

export default persistReducer(persistConfig, rootReducer);
