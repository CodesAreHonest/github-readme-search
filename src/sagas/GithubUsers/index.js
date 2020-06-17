import { all, takeLatest } from "redux-saga/effects";
import { githubUserTypes } from "../../states/GithubUser";
import { searchUsers }     from "./searchUsers";
import { getProfile }      from "./getProfile";

export function* watchGithubUserAction() {
    yield all([
        takeLatest(githubUserTypes.GET_GITHUB_USERS, searchUsers),
        takeLatest(githubUserTypes.GET_GITHUB_USER_PROFILE, getProfile)
    ])
}