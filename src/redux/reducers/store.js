import { createStore } from "redux";
import rootReducer from "./rootReducer";

export default function store() {
	return createStore(rootReducer);
}
