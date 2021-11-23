import {
    MAID_LIST_FAIL,
    MAID_LIST_REQUEST,
    MAID_LIST_SUCCESS,
    MAID_DETAILS_FAIL,
    MAID_DETAILS_REQUEST,
    MAID_DETAILS_SUCCESS
 } from '../constants/maidConstants';

export const maidListReducer = (state = { maids: [] }, action) => {
    switch (action.type) {
        case MAID_LIST_REQUEST:
            return { loading: true, maids: [] }
        case MAID_LIST_SUCCESS:
            return { loading: false, maids: action.payload }
        case MAID_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const maidDetailsReducer = (state = { maids: {} }, action) => {
    switch (action.type) {
        case MAID_DETAILS_REQUEST:
            return { loading: true, ...state }
        case MAID_DETAILS_SUCCESS:
            return { loading: false, maid: action.payload }
        case MAID_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};