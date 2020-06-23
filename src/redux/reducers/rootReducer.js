import { combineReducers } from "redux";
import manageUser from "./manageUser";

const rootReducer = combineReducers({
	manageUser,
});

export default rootReducer;
