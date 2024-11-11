import ReactMarkdown from 'react-markdown';
import moment, { unix } from 'moment';


export const Comment = (props) => {
    const { comment } = props;

    return (
        <div className="post-comment">
            <div className="comment-data">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-time">{moment.unix(comment.created_utc).fromNow()}</span>

            </div>
            <ReactMarkdown children={comment.body}/>
        </div>
    );
}