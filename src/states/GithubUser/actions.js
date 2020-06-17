import * as types from "./types";

export const getGithubUsers = (login, page = 1, perPage = 10) => ({
    type   : types.GET_GITHUB_USERS,
    payload: {
        login, page, perPage
    }
});