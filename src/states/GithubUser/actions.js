import * as types from "./types";

export const getGithubUsers = (login, page = 1, perPage = 10) => ({
    type   : types.GET_GITHUB_USERS,
    payload: {
        login, page, perPage
    }
});

export const registerUserQuery = query => ({
    type   : types.SEARCH_USERNAME_QUERY,
    payload: { query }
});

export const resetGetGithubUserStatus = () => ({
    type: types.RESET_GET_GITHUB_USER_STATUS
});