export const trlList = (state = { trl: {} }, action) => {
    const { type, payload } = action;
    switch (type) {
        case "FETCH_TRL_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_TRL_SUCCESS":
            return {
                ...state,
                loading: false,
                trl: payload
            }
        case "FETCH_TRL_FAILURE":
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}