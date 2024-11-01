import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";


export function Main() {
    const [isActive, setIsActive] = useState(false);
    const subDivRef = useRef(null);

    useEffect(() => {
        const subDiv = subDivRef.current;
        
        if (subDiv) {
            subDiv.addEventListener("mousedown", toggleBackground);
            
            return () => subDiv.removeEventListener("mousedown", toggleBackground);
        }
    }, []);
    const subD = document.querySelector(".subred-div");
    if (isActive) {
        subD.classList.toggle("active", isActive)
    } else {
        subD.classList.remove("active");
    }
    console.log(isActive)

    const toggleBackground = () => {
        setIsActive(prev => !prev);
    };


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
                        <div ref={subDivRef} className="subred-div">
                            <img src={require("./images/subreddit_1.png")} className="subred-img"/>
                            <p className="subred-p">FirstSubreddit</p>
                        </div>
                        <div className="subred-div">
                            <img src={require("./images/subreddit_2.png")} className="subred-img"/>
                            <p className="subred-p">SecondSubreddit</p>
                        </div>
                    </div>                  
                </section>
            </section>
        </main>
    );
} 