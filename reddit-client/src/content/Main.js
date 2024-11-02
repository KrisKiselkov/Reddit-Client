import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { subreddits } from "./display-data/Subreddits";
import { redditPosts } from "./display-data/Reddit-Posts";


export function Main() {
    function redditDiv() {
        return (
            redditPosts.map((post) => (
                <div className="post">
                    <div className="vote-post">
                        <p>U</p>
                        <br></br>
                        <p>{post.vote}</p>
                        <br></br>
                        <p>D</p>
                    </div>
                    <div className="main-post-txt">
                        <h3>{post.label}</h3>
                    </div>
                    <div className="img-div-post">
                        <img className="img-post" src={post.image}/>
                    </div>
                    <div className="footer-post">
                        <div className="footer-user-info">
                            <img className="footer-post-icon"/>
                            <p className="footer-post-user">{post.user}</p>
                        </div>
                        <p className="footer-post-time">11 hours</p>
                        <p className="footer-post-comment">{post.comments}</p>
                    </div>
                </div>
            ))
        );
    };


    const [activeIndex, setActiveIndex] = useState(null); // Track which element is active

    const handleToggleBackground = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    function subredditsDiv() {
        return (
            subreddits.map((sub, index) => (
                <div
                    key={index}
                    className={`subred-div ${activeIndex === index ? 'active' : ''}`}
                    onMouseDown={() => handleToggleBackground(index)}
                >
                    <img src={sub.logo} className="subred-img" style={{ border: `3px solid ${sub.borderColor}` }} />
                    <p className="subred-p">{sub.label}</p>
                </div>
            ))
        );
    }

    return(
        <main>
            <section id="main-section">
                <section id="post-section">
                    {redditDiv()}
                </section>

                <section id="pages-section">
                    <div id="subred-section">
                        <h2>Subreddits</h2>
                        {subredditsDiv()}
                    </div>                  
                </section>
            </section>
        </main>
    );
} 