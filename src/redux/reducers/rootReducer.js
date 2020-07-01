import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import manageUser from "./manageUser";
import manageStory from "./manageStory";
import manageCharacter from "./manageCharacter";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["currentUser"],
};

const rootReducer = combineReducers({
	currentUser: manageUser,
	userStories: manageStory,
	userCharacters: manageCharacter,
});

export default persistReducer(persistConfig, rootReducer);
