const initialState = {
    product: null,
    loading: false,
    error: null,
};

export const product = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "FETCH_PRODUCT_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_PRODUCT_SUCCESS":
            return {
                ...state,
                loading: false,
                product: payload
            }
        case "FETCH_PRODUCT_FAILURE":
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}