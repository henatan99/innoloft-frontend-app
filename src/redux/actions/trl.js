import axios from "axios";
import { baseApi } from "../../helpers/constants";

import {
    FETCH_TRL_REQUEST,
    FETCH_TRL_SUCCESS,
    FETCH_TRL_FAILURE,
} from "../actionTypes";
  
export const fetchTRL = () => async (dispatch) => {
    dispatch({
        type: FETCH_TRL_REQUEST,
    });
    try {
        const res = await axios.get(`${baseApi}/trl/`);
        const { data } = res;
        dispatch({ type: FETCH_TRL_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_TRL_FAILURE, payload: error.message });
    }
};