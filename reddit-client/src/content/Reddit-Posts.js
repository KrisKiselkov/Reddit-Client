import { useState } from "react";
import { redditPosts } from "./display-data/Reddit-Posts-Data";


export const RedditPosts = (props) => {
    const [voteValue, setVoteValue] = useState(0);

    const { post, onToggleComments } = props;

    /** 
     * @param {number} newValue The new vote value
    */

    const onClickVote = (value) => {
        if (value === voteValue) {
            setVoteValue(0);
        } else if (value === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    }

    const renderComments = () => {
        if (post.errorComments) {
            return (
                <div>
                    <h3>Error Loading Comments</h3>
                </div>
            );
        }
    }

    function redditDiv() {
        return (
            <div className="post" key={post.id}>
                <div className="vote-post">
                    <p>U</p>
                    <br></br>
                    <p>6969</p>
                    <br></br>
                    <p>D</p>
                </div>
                <div className="main-post-txt">
                    <h3>{post.title}</h3>
                </div>
                <div className="img-div-post">
                    <img className="img-post" src={post.url}/>
                </div>
                <div className="footer-post">
                    <div className="footer-user-info">
                        <img className="footer-post-icon"/>
                        <p className="footer-post-user">{post.author}</p>
                    </div>
                    <p className="footer-post-time">11 hours</p>
                    <p className="footer-post-comment">464</p>                    
                    </div>
            </div>
        );
    };


    return(
        <>
            {redditDiv()}
        </>
    );
}