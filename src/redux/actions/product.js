import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE,
} from "../actionTypes";
  
import axios from "axios";
import { baseApi } from "../../helpers/constants";

export const fetchProduct = (productId) => async (dispatch) => {
    dispatch({
        type: FETCH_PRODUCT_REQUEST,
    });
    try {
        const res = await axios.get(`${baseApi}/product/${productId}`);
        console.log('res ✅✅✅', res)
        const { data } = res;
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error.message });
    }
};

export const editProduct = (productId, product) => async (dispatch) => {
  console.log('product payload', product)
    dispatch({
      type: EDIT_PRODUCT_REQUEST,
    });
    try {
      const res = await axios.put(`${baseApi}/product/${productId}`, product);
     
      dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: {...product} });
    } catch (error) {
      dispatch({
        type: EDIT_PRODUCT_FAILURE,
        payload: error.message
      });
    }
}
