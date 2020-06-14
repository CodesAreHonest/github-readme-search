import { combineReducers } from "redux";

import githubUserReducer from "./GithubUser";

export default combineReducers({
    githubUser: githubUserReducer
}); 