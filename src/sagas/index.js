import { all }                   from "redux-saga/effects";
import { watchGithubUserAction } from "./GithubUsers";


function* rootSaga() {
    yield all([
        watchGithubUserAction(),
    ])
}

export default rootSaga;