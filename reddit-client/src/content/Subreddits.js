import { useDispatch, useSelector } from "react-redux";
import { subreddits } from "./display-data/Subreddits-Data";
import { useEffect, useState } from "react";
import { fetchSubreddits, selectSubreddits } from "./slices/subredditSlice";
import { selectSelectedSubreddit, setSelectedSubreddit } from "./slices/redditSlice";


export function Subreddits() {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit); 

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);


    const [activeIndex, setActiveIndex] = useState(null); // Track which element is active

    const handleToggleBackground = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    function subredditsDiv() {
        return (
            subreddits.map((subreddit, index) => (
                <div
                    key={subreddit.id}
                    className={`subred-div ${activeIndex === index ? 'active' : ''}`}
                    onMouseDown={() => handleToggleBackground(index)}
                    onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                >
                    <img src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                }
                alt={`${subreddit.display_name}`}
                className="subred-img"
                style={{ border: `3px solid ${subreddit.primary_color}` }} />
                    <p className="subred-p">{subreddit.display_name}</p>
                </div>
            ))
        );
    };


    return(
        <section id="pages-section">
            <div id="subred-section">
                <h2>Subreddits</h2>
                {subredditsDiv()}
            </div>                  
        </section>
    );
}