import { combineReducers } from "redux";
import manageUser from "./manageUser";

const rootReducer = combineReducers({
	user: manageUser,
});

export default rootReducer;
