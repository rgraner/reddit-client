import React from 'react';


export const PostCard = ({ title, author, date, media, subreddit, commentsCount }) => {
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
                <p>{commentsCount} comments</p>
            </div>
        </div>
    );
};
