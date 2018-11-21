import { combineReducers } from "redux";

import addToDoReducer from "./ToDoReducer";
import userReducer from "./UserReducer";
export default combineReducers({
    addToDoReducer,
    userReducer
})