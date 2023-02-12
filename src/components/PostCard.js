import React, { useState, useEffect } from 'react';


export const PostCard = ({ title, author, date, media, subreddit, commentsCount, urlForComments }) => {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
            const commentUrl = `https://www.reddit.com${urlForComments}.json`;
            const res = await fetch(commentUrl);
            const json = await res.json();
            setComments(json[1].data.children.map(c => ({ 
                body: c.data.body, 
                author: c.data.author, 
                created: c.data.created 
            })));
            };
        
            if (showComments) {
            fetchComments();
            }
    }, [showComments, urlForComments]);

    return (
        <div className="post-card">
            <div className="post-card-header">
                <h2>{title}</h2>
                <p>posted by {author}</p>
                <p>{subreddit}</p>
            </div>
            <div
                className="post-card-media"
                style={{ backgroundImage: `url(${media})`}}
            />
            <div className="post-card-footer">
                <p>{date}</p>
                <p onClick={() => setShowComments(!showComments)}>{commentsCount} comments</p>
            </div>
            {showComments && (
            <div className="comments">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p>{comment.body}</p>
                        <p className="comment-author">by {comment.author}</p>
                        <p className="comment-time">{comment.created} ago</p>
                    </div>
                ))}
            </div>
      )}
        </div>
    );
};

  
