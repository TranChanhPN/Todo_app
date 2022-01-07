import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const Reducer = combineReducers({
    todoList: todoReducer
})
export default Reducer