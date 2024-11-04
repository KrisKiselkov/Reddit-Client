import { redditPosts } from "./display-data/Reddit-Posts-Data";


export function RedditPosts() {
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


    return(
        <section id="post-section">
            {redditDiv()}
        </section>
    );
}