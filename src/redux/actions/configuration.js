import {
    FETCH_CONFIGURATION_REQUEST,
    FETCH_CONFIGURATION_SUCCESS,
    FETCH_CONFIGURATION_FAILURE
} from "../actionTypes";

import axios from "axios";
import { baseApi } from "../../helpers/constants";

export const fetchConfiguration = (appId) => async (dispatch) => {
    dispatch({
        type: FETCH_CONFIGURATION_REQUEST,
    });
    try {
        const res = await axios.get(`${baseApi}/configuration/${appId}`);
        console.log('res ✅✅✅', res)
        const { data } = res;
        dispatch({ type: FETCH_CONFIGURATION_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_CONFIGURATION_FAILURE, payload: error.message });
    }
};