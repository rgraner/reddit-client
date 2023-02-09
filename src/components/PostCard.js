import React from 'react';


export const PostCard = ({ title, author, date, media, commentsCount }) => {
    return (
        <div className="post-card">
            <div className="post-card-header">
                <h2>{title}</h2>
                <p>{author}</p>
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

// export const PostCard = ({ title, media, date, author, commentsCount }) => {
//     return (
//       <div className="post-card">
//         <h3 className="post-card-title">{title}</h3>
//         <div className="post-card-media">{media}</div>
//         <div className="post-card-date">{date}</div>
//         <div className="post-card-author">posted by: {author}</div>
//         <div className="post-card-comments-count">{commentsCount} comments</div>
//       </div>
//     );
//   };