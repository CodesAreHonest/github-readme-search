import { apiResponse } from "../format";
import * as types      from "./types";

const initialState = {
    users: apiResponse
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
        default:
            return state;
    }
};

export default GithubUserReducer;

