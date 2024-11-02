import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { subreddits } from "./display-data/Subreddits";


export function Main() {
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
                    <div className="post">
                        <div className="vote-post">
                            <p>U</p>
                            <br></br>
                            <p>6969</p>
                            <br></br>
                            <p>D</p>
                        </div>
                        <div className="main-post-txt">
                            <h3>First Text</h3>
                        </div>
                        <div className="img-div-post">
                            <img className="img-post" src={require("./images/History-One.webp")}/>
                        </div>
                        <div className="footer-post">
                            <div className="footer-user-info">
                                <img className="footer-post-icon"/>
                                <p className="footer-post-user">a_gosho</p>
                            </div>
                            <p className="footer-post-time">11 hours</p>
                            <p className="footer-post-comment">464</p>
                        </div>
                    </div>

                    <div className="post">
                        <div className="vote-post">
                            <p>U</p>
                            <br></br>
                            <p>6969</p>
                            <br></br>
                            <p>D</p>
                        </div>
                        <div className="main-post-txt">
                            <h3>Second Text</h3>
                        </div>
                        <div className="img-div-post">
                        <img className="img-post" src={require("./images/History-Two.webp")}/>
                        </div>
                        <div className="footer-post">
                            <div className="footer-user-info">
                                <img className="footer-post-icon"/>
                                <p className="footer-post-user">a_gosho</p>
                            </div>
                            <p className="footer-post-time">11 hours</p>
                            <p className="footer-post-comment">464</p>
                        </div>
                    </div>
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