import { put, call }       from "redux-saga/effects";
import GithubRepoAPI       from "../../apis/GithubRepoAPI";
import { githubRepoTypes } from "../../states/GithubRepo";

export function* getUserReadmeRaw(action) {
    const { username, repo } = action.payload;

    try {
        const response = yield call(GithubRepoAPI.getRawREADME, username, repo);
        yield put(success(response))
    }
    catch ( err ) {
        yield put(failure())
    }
}

const success = readme => {
    return {
        type   : githubRepoTypes.GET_USER_REPOSITORY_README_RAW_SUCCESS,
        payload: readme
    }
};

const failure = () => ({
    type: githubRepoTypes.GET_USER_REPOSITORY_README_RAW_FAILURE
});