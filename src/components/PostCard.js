import React, { useState, useEffect } from 'react';
import { timeSince } from '../utils/timeSince.js'


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
                <div className="post-card-top-header">
                    <p className="post-card-author">{author}</p>
                    <div className="dot"/>
                    <p>{subreddit}</p>
                    <div className="dot"/>
                    <p>{timeSince(date)}</p>
                </div>
                <h2 >{title}</h2>    
            </div>
            {
                media ? (
                    <div className="post-card-media">
                        <img src={media} alt=""/>
                    </div>
                ) : ("")
            }
            
                {/* style={{ backgroundImage: `url(${media})`}} */}
            <div className="post-card-footer">         
                <p onClick={() => setShowComments(!showComments)}>{commentsCount} comments</p>
            </div>
            {showComments && (
            <div className="comments">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p>{comment.body}</p>
                        <div className="comment-footer">
                            <p className="comment-author">{comment.author}</p>
                            <div className="dot"/>
                            <p className="comment-time">{timeSince(comment.created)}</p>
                        </div>
                    </div>
                ))}
            </div>
      )}
        </div>
    );
};

// {
//   posts.length === 0 ? (
//     <div>Loading...</div>
//   ) : (
//     <PostList posts={filteredPosts} />
//   )
// }

  
