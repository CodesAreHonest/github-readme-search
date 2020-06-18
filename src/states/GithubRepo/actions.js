import * as types from "./types";

export const getUserRepositories = username => ({
    type   : types.GET_GITHUB_USER_REPOSITORIES,
    payload: { username }
});

export const getRawREADME = (username, repo) => ({
    type   : types.GET_USER_REPOSITORY_README_RAW,
    payload: { username, repo }
});