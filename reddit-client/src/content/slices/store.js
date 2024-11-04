import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditReducer from './subredditSlice';


export default configureStore({
    reducer: combineReducers({
        subreddits: subredditReducer
    })
})