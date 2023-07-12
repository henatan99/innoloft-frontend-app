const initialState = {
    configuration: null,
    loading: false,
    error: null,
};

export const configuration = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "FETCH_CONFIGURATION_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_CONFIGURATION_SUCCESS":
            return {
                ...state,
                loading: false,
                configuration: payload
            }
        case "FETCH_CONFIGURATION_FAILURE":
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}