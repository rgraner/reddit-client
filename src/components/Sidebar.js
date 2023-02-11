import React from 'react';


export const Sidebar = ({ subreddits, onSubredditSelection }) => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Subreddits</h3>
            <ul className="sidebar-list">
                {subreddits.map(subreddit => (
                    <li 
                        key={subreddit.data.id} 
                        className="sidebar-list-item" 
                        onClick={() => onSubredditSelection(subreddit.data.subreddit)}
                    >
                        {subreddit.data.subreddit}
                    </li>
                ))}
            </ul>
        </div>
    );
};



