import * as types from "./types";

export const getGithubUsers = users => ({
    type  : types.GET_GITHUB_USERS,
    action: {
        users
    }
});