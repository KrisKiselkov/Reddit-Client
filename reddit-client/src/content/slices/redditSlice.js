import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getSubredditPosts, getPostComments } from "../RedditAPI";


export const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: {
        posts: [],
        isLoading: false,
        error: false,
        searchTerm: '',
        selectedSubreddit: '/r/pics/',
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        loadingPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        successfulPosts(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        failedPosts(state) {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
        toggleShowingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments
        },
        startGetComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
            
            if(!state.posts[action.payload].showingComments) {
                return;
            };

            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        }
    }
});

export const {
    setPosts,
    failedPosts,
    successfulPosts,
    loadingPosts,
    setSearchTerm,
    setSelectedSubreddit,
    toggleShowingComments,
    getCommentsFailed,
    getCommentsSuccess,
    startGetComments,
} = redditSlice.actions;

export default redditSlice.reducer;


// Redux Thunk that gets posts from a subreddit.
export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(loadingPosts());
        const posts = await getSubredditPosts(subreddit);

        // We are adding showingComments and comments as additional fields to handle showing them when the user wants to. We need to do this because we need to call another API endpoint to get the comments for each post.
        const postData = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false
        }));
        dispatch(successfulPosts(postData));
    } catch (error) {
        dispatch(failedPosts());
    }
};

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(startGetComments(index));
        const comments = await getPostComments(permalink);
        dispatch(getCommentsSuccess({ index, comments }));
    } catch (error) {
        dispatch(getCommentsFailed(index));
    }
};

const selectPosts = (state) => state.reddit.posts;
const selectSearchterm = (state) => state.reddit.searchTerm;

export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddits;

export const selectFilteredPosts = createSelector(
    [ selectPosts, selectSearchterm ],
    (posts, searchTerm) => {
        if (searchTerm !== '') {
            return posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        return posts;
    }
)