import { put, call }       from "redux-saga/effects";
import GithubUserAPI       from "../../apis/GithubUserAPI";
import { githubUserTypes } from "../../states/GithubUser";

export function* getProfile(action) {
    const { username } = action.payload;

    try {
        const response = yield call(GithubUserAPI.getProfile, username);
        yield put(success(response))
    }
    catch ( err ) {
        yield put(failure())
    }
}

const success = profile => {
    return {
        type   : githubUserTypes.GET_GITHUB_USER_PROFILE_SUCCESS,
        payload: profile
    }
};

const failure = () => ({
    type: githubUserTypes.GET_GITHUB_USER_PROFILE_FAILURE
});