import { combineReducers } from "@reduxjs/toolkit";
import { product } from "./product";
import { trlList } from "./trl";
import { configuration } from "./configuration";

export default combineReducers({ 
    product, 
    trlList,
    configuration
});