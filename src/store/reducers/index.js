import { combineReducers } from "redux";
import tasks from "./taskReducer";
import projects from "./projectReducer";
import user from "./authReducer";
import apiError from "./apiReducer";

const rootReducer = combineReducers({
  tasks,
  projects,
  user,
  apiError,
});

export default rootReducer;
