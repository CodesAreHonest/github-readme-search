import { all, takeLatest }  from "redux-saga/effects";
import { githubRepoTypes }  from "../../states/GithubRepo";
import { getUserRepo }      from "./getUserRepo";
import { getUserReadmeRaw } from "./getUserReadmeRaw";


export function* watchGithubRepoAction() {
    yield all([
        takeLatest(githubRepoTypes.GET_GITHUB_USER_REPOSITORIES, getUserRepo),
        takeLatest(githubRepoTypes.GET_USER_REPOSITORY_README_RAW, getUserReadmeRaw)
    ])
}