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
                    isFetching: false
                })
            }
        }
        default:
            return state;
    }
};

export default GithubUserReducer;

