import * as types from "./types";

export const getUserRepositories = username => ({
    type   : types.GET_GITHUB_USER_REPOSITORIES,
    payload: { username }
});

