import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer
}, applyMiddleware);

export default store;