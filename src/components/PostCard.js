import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { timeSince } from '../utils/timeSince.js'


export const PostCard = ({ title, author, date, media, subreddit, commentsCount, urlForComments }) => {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [imageUrl, setImageUrl] = useState(media);

    const handleImageError = () => {
        setImageUrl("");
      };

      useEffect(() => {
        const fetchComments = async () => {
          const commentUrl = `https://www.reddit.com${urlForComments}.json`;
          const res = await fetch(commentUrl);
          const json = await res.json();
          setComments(json[1].data.children.map((c) => {
            const commentText = c.data.body || '';
            const imageUrlRegex = /((?:https?:\/\/(?:[a-z0-9]+\.)+[a-z]{2,}(?:\/[\w\d\-_\\&%#~]*)?)\.(?:jpe?g|png|gif)(?:\?.+)?)/i;
            const match = commentText.match(imageUrlRegex);
            const commentImageUrl = match ? match[1].replace(/&amp;/g, '&') : null;
            const commentTextWithoutImageUrl = match ? commentText.replace(imageUrlRegex, '') : commentText || '';

            return {
              text: commentTextWithoutImageUrl.trim(),
              imageUrl: commentImageUrl,
              author: c.data.author,
              created: c.data.created,
            };
          }));
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
                imageUrl ? (
                    <div className="post-card-media">
                        <img src={imageUrl} alt="" onError={handleImageError}/>
                    </div>
                ) : ("")
            }
            <div className="post-card-footer">         
                <p onClick={() => setShowComments(!showComments)}>{commentsCount} comments</p>
            </div>
            {showComments && (
              <div className="comments">
                {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    {comment.text && (
                      <ReactMarkdown children={comment.text} />
                    )}
                    {comment.imageUrl && (
                      <div className="comment-image">
                        <img src={comment.imageUrl} alt="" />
                      </div>
                    )}
                    <div className="comment-footer">
                      <p className="comment-author">{comment.author}</p>
                      <div className="dot" />
                      <p className="comment-time">{timeSince(comment.created)}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
    );
};

