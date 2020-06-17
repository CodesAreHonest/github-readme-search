import { put, call }       from "redux-saga/effects";
import GithubUserAPI       from "../../apis/GithubUserAPI";
import { githubUserTypes } from "../../states/GithubUser";

export function* searchUsers(action) {
    const { login, page, perPage } = action.payload;

    try {
        const response = yield call(GithubUserAPI.searchUsers, login, page, perPage);
        yield put(success(response))
    }
    catch ( err ) {
        yield put(failure())
    }
}

const success = gitUsers => {
    return {
        type   : githubUserTypes.GET_GITHUB_USERS_SUCCESS,
        payload: gitUsers
    }
};

const failure = () => ({
    type: githubUserTypes.GET_GITHUB_USERS_FAILURE
});