import { useDispatch, useSelector } from "react-redux";
import { RedditPosts } from "./Reddit-Posts";
import { Subreddits } from "./Subreddits";
import { fetchComments, fetchPosts, selectFilteredPosts, setSearchTerm } from "./slices/redditSlice";
import { useEffect } from "react";


export function Main() {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };

        return getComments;
    };

    /* isLoading if*/
    
    /*if (error) {
        return (
            <div className="error">
                <h2>Failed to load posts.</h2>
                <button
                type="button"
                onClick={() => dispatch(fetchPosts(selectedSubreddit))}
                >
                Try again
                </button>
            </div>
        );
    }*/

    /*if (posts.length === 0) {
        return (
            <div className="error">
                <h2>No posts matching "{searchTerm}"</h2>
                <buton type="button" onClick={() => dispatch(setSearchTerm(''))}>
                    Go Home
                </buton>
            </div>
        );
    }*/


    return(
        <main>
            <section id="main-section">
                <section id="post-section">
                    {posts.map((post, index) => (
                        <RedditPosts 
                            key={post.id}
                            post={post}
                            onToggleComments={onToggleComments(index)}
                        />
                    ))}
                </section>
                <Subreddits />
            </section>
        </main>
    );
} 