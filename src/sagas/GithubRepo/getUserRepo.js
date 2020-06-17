import { put, call }       from "redux-saga/effects";
import GithubRepoAPI       from "../../apis/GithubRepoAPI";
import { githubRepoTypes } from "../../states/GithubRepo";

export function* getUserRepo(action) {
    const { username } = action.payload;

    try {
        const response = yield call(GithubRepoAPI.getRepositories, username);
        yield put(success(response))
    }
    catch ( err ) {
        yield put(failure())
    }
}

const success = repos => {
    return {
        type   : githubRepoTypes.GET_GITHUB_USER_REPOSITORIES_SUCCESS,
        payload: repos
    }
};

const failure = () => ({
    type: githubRepoTypes.GET_GITHUB_USER_REPOSITORIES_FAILURE
});