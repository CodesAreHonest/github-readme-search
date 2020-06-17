import { all }                   from "redux-saga/effects";
import { watchGithubUserAction } from "./GithubUsers";
import { watchGithubRepoAction } from "./GithubRepo";


function* rootSaga() {
    yield all([
        watchGithubUserAction(),
        watchGithubRepoAction()
    ])
}

export default rootSaga;