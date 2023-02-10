import React from 'react';


export const Sidebar = ({ subreddits }) => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Subreddits</h3>
            <ul className="sidebar-list">
                {subreddits.map(subreddit => (
                    <li key={subreddit.data.author_fullname} className="sidebar-list-item">
                        {subreddit.data.subreddit}
                    </li>
                ))}
            </ul>
        </div>
    );
};

