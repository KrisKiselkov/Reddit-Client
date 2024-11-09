import ReactMarkdown from 'react-markdown';


export const Comment = (props) => {
    const { comment } = props;

    return (
        <div className="post-comment">
            <div className="comment-data">
                <p className="comment-author">{comment.author}</p>
                <p className="comment-time">4 hourrs ago</p>

            </div>
            <ReactMarkdown children={comment.body}/>
        </div>
    );
}