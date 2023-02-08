import React from 'react';


export const PostCard = ({ title, media, date, author, commentsCount }) => {
    return (
        <div className="post-card">
            <h3 className="post-card-title">{title}</h3>
            <div classNmae="pos-card-media">{media}</div>
            <div classNmae="pos-card-media">{date}</div>
            <div classNmae="pos-card-media">posted by: {author}</div>
            <div classNmae="pos-card-media">{commentsCount} comments</div>
        </div>
    );
};