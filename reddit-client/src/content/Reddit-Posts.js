import { useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
  } from 'react-icons/ti';
import { Comment } from "./Comment";
import millify from "millify";


export const RedditPosts = (props) => {
    const [voteValue, setVoteValue] = useState(0);

    const { post, onToggleComments } = props;

    /** 
     * @param {number} newValue The new vote value
    */

    const onClickVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
        } else if (newValue === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    };

    const renderUpVote = () => {
        if (voteValue === 1) {
        return <TiArrowUpThick className="icon-action" />;
        }
        return <TiArrowUpOutline className="icon-action" />;
    };
    
    const renderDownVote = () => {
        if (voteValue === -1) {
            return <TiArrowDownThick className="icon-action" />;
        }
        return <TiArrowDownOutline className="icon-action" />;
    };
    
    const getVoteType = () => {
        if (voteValue === 1) {
            return 'up-color';
        }
        if (voteValue === -1) {
            return 'down-color';
        }
    
        return '';
    };


    const renderComments = () => {
        if (post.errorComments) {
            return (
                <div>
                    <h3>Error Loading Comments</h3>
                </div>
            );
        }

        if (post.loadingComments) {
            return (
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            )
        }

        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comment comment={comment} key={comment.id}/>
                    ))}
                </div>
            )
        }
    }


    function redditDiv() {
        return (
            <div className="post" key={post.id}>
                <div className="vote-post">
                    <button className={`icon-action-button up-vote ${voteValue === 1 && 'up-active'}`}
                    onClick={() => onClickVote(1)}
                    >
                        {renderUpVote()}
                    </button>
                    <br></br>
                    <p className={`vote-p ${getVoteType()}`}>{millify(post.ups)}</p>
                    <br></br>
                    <button className={`icon-action-button down-vote ${voteValue === -1 && 'down-active'}`}
                    onClick={() => onClickVote(-1)}>
                        {renderDownVote()}
                    </button>
                </div>
                <div className="main-post-txt">
                    <h3>{post.title}</h3>
                </div>
                <div className="img-div-post">
                    <img className="img-post" src={post.url} alt=""/>
                </div>
                <div className="footer-post">
                    <div className="footer-user-info">
                        <img className="footer-post-icon"/>
                        <p className="footer-post-user">{post.author}</p>
                    </div>
                    <p className="footer-post-time">11 hours</p>
                    <div>
                        <button
                            type="button"
                            className={`icon-comment-button ${
                            post.showingComments && 'showing-comments'
                            }`}
                            onClick={() => onToggleComments(post.permalink)}
                        >
                            <TiMessage className="icon-comment"/>
                        </button>
                        <span className="footer-post-comment">{post.num_comments}</span>                    
                    </div>
                </div>
                    {renderComments()}
            </div>
        );
    };


    return(
        <>
            {redditDiv()}
        </>
    );
}