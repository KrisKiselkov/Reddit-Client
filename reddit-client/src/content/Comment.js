import ReactMarkdown from 'react-markdown';


export const Comment = (props) => {
    const { comment } = props;

    return (
        <div className="post-comment">
            <div className="comment-data">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-time">4 hourrs ago</span>

            </div>
            <ReactMarkdown children={comment.body}/>
        </div>
    );
}