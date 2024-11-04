import { subreddits } from "./display-data/Subreddits-Data";
import { useState } from "react";


export function Subreddits() {
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