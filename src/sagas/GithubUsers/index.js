import { all, takeLatest } from "redux-saga/effects";
import { githubUserTypes } from "../../states/GithubUser";
import { searchUsers }     from "./searchUsers";

export function* watchGithubUserAction() {
    yield all([
        takeLatest(githubUserTypes.GET_GITHUB_USERS, searchUsers)
    ])
}