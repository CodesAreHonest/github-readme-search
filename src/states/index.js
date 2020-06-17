import { combineReducers } from "redux";

import githubUserReducer from "./GithubUser";
import githubRepoReducer from "./GithubRepo";

export default combineReducers({
    githubUser: githubUserReducer,
    githubRepo: githubRepoReducer
}); 