import React from 'react';


export const Sidebar = ({ subreddits }) => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Subreddits</h3>
            <ul className="sicebar-list">
                {subreddits.map(subreddit => (
                    <li key={subreddit.id} className="sicebar-list-item">
                        {subreddit.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};