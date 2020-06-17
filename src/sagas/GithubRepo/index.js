import { all, takeLatest } from "redux-saga/effects";
import { githubRepoTypes } from "../../states/GithubRepo";
import { getUserRepo }     from "./getUserRepo";


export function* watchGithubRepoAction() {
    yield all([
        takeLatest(githubRepoTypes.GET_GITHUB_USER_REPOSITORIES, getUserRepo)
    ])
}