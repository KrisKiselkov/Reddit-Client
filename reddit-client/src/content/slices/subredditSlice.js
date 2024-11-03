import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../RedditAPI';


export const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        error: false,
        isLoading: false,
    },
    reducers: {
        loadingSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        successfulSubreddits(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        failedSubreddits(state) {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const { loadingSubreddits, successfulSubreddits, failedSubreddits } = subredditSlice.actions;

export default subredditSlice.reducer


export const fetchSubreddits = () => async (dispatch) => {
    try {
        dispatch(loadingSubreddits())
        const subreddits = await getSubreddits();
        dispatch(successfulSubreddits(subreddits));
    } catch (error) {
        dispatch(failedSubreddits());
    }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;