import axios from 'axios';

import {
    MAID_LIST_REQUEST,
    MAID_LIST_SUCCESS,
    MAID_LIST_FAIL,
    MAID_DETAILS_REQUEST,
    MAID_DETAILS_SUCCESS,
    MAID_DETAILS_FAIL
 } from '../constants/maidConstants';

 export const listMaids = () => async(dispatch) => {
    try {
        dispatch({ type: MAID_LIST_REQUEST })

        const { data } = await axios.get('/api/maids');

        dispatch({
            type: MAID_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        
        dispatch({
            type: MAID_LIST_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
 };

 export const listMaidDetails = (maidid) => async(dispatch) => {
    try {
        dispatch({ type: MAID_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/maids/${maidid}`);

        dispatch({
            type: MAID_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        
        dispatch({
            type: MAID_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
 };