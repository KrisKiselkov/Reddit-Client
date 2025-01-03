import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditReducer from './subredditSlice';
import redditReducer from './redditSlice';


export default configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
        subreddits: subredditReducer
    })
});