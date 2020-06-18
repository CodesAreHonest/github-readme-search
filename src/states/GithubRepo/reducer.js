import { apiResponse } from "../format";
import * as types      from "./types";

const initialState = {
    query       : "",
    repositories: apiResponse,
    readme      : apiResponse
};

const GithubRepoReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case types.GET_GITHUB_USER_REPOSITORIES: {
            return {
                ...state,
                repositories: Object.assign({}, state.repositories, {
                    type      : types.GET_GITHUB_USER_REPOSITORIES,
                    isFetching: true,
                    data      : []
                })
            }
        }
        case types.GET_GITHUB_USER_REPOSITORIES_FAILURE: {
            return {
                ...state,
                repositories: Object.assign({}, state.repositories, {
                    type      : types.GET_GITHUB_USER_REPOSITORIES_FAILURE,
                    isFetching: false
                })
            }
        }
        case types.GET_GITHUB_USER_REPOSITORIES_SUCCESS: {
            return {
                ...state,
                repositories: Object.assign({}, state.repositories, {
                    type      : types.GET_GITHUB_USER_REPOSITORIES_SUCCESS,
                    isFetching: false,
                    data      : action.payload
                })
            }
        }
        case types.GET_USER_REPOSITORY_README_RAW: {
            return {
                ...state,
                readme: Object.assign({}, state.readme, {
                    type      : types.GET_GITHUB_USER_REPOSITORIES,
                    isFetching: true,
                    data      : ""
                })
            }
        }
        case types.GET_USER_REPOSITORY_README_RAW_SUCCESS: {
            return {
                ...state,
                readme: Object.assign({}, state.readme, {
                    type      : types.GET_USER_REPOSITORY_README_RAW_SUCCESS,
                    isFetching: false,
                    data      : action.payload
                })
            }
        }
        case types.GET_USER_REPOSITORY_README_RAW_FAILURE: {
            return {
                ...state,
                readme: Object.assign({}, state.readme, {
                    type      : types.GET_USER_REPOSITORY_README_RAW_FAILURE,
                    isFetching: false,
                    data      : ""
                })
            }
        }
        default:
            return state;
    }
};

export default GithubRepoReducer;