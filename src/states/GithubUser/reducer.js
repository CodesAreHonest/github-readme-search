import { apiResponse } from "../format";
import * as types      from "./types";

const initialState = {
    query  : "",
    users  : apiResponse,
    profile: apiResponse
};

const GithubUserReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case types.GET_GITHUB_USERS: {
            return {
                ...state,
                users: Object.assign({}, state.users, {
                    type      : types.GET_GITHUB_USERS,
                    isFetching: true
                })
            }
        }
        case types.GET_GITHUB_USERS_FAILURE: {
            return {
                ...state,
                users: Object.assign({}, state.users, {
                    type      : types.GET_GITHUB_USERS_FAILURE,
                    isFetching: false
                })
            }
        }
        case types.GET_GITHUB_USERS_SUCCESS: {
            return {
                ...state,
                users: Object.assign({}, state.users, {
                    type      : types.GET_GITHUB_USERS_SUCCESS,
                    isFetching: false,
                    data      : action.payload
                })
            }
        }
        case types.SEARCH_USERNAME_QUERY: {
            return {
                ...state,
                query: action.payload.query
            }
        }
        case types.RESET_GET_GITHUB_USER_STATUS: {
            return {
                ...state,
                users: Object.assign({}, state.users, {
                    type: types.GET_GITHUB_USERS
                })
            }
        }
        case types.GET_GITHUB_USER_PROFILE: {
            return {
                ...state,
                profile: Object.assign({}, state.profile, {
                    type      : types.GET_GITHUB_USER_PROFILE,
                    isFetching: true
                })
            }
        }
        case types.GET_GITHUB_USER_PROFILE_FAILURE: {
            return {
                ...state,
                profile: Object.assign({}, state.profile, {
                    type      : types.GET_GITHUB_USER_PROFILE_FAILURE,
                    isFetching: false
                })
            }
        }
        case types.GET_GITHUB_USER_PROFILE_SUCCESS: {
            return {
                ...state,
                profile: Object.assign({}, state.profile, {
                    type      : types.GET_GITHUB_USER_PROFILE_SUCCESS,
                    isFetching: false,
                    data      : action.payload
                })
            }
        }
        case types.RESET_GET_GITHUB_USER_PROFILE_STATUS: {
            return {
                ...state,
                profile: Object.assign({}, state.profile, {
                    type: types.GET_GITHUB_USER_PROFILE
                })
            }
        }
        default:
            return state;
    }
};

export default GithubUserReducer;

