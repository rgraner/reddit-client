import React from 'react';


export const Sidebar = ({ subreddits }) => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Subreddits</h3>
            <ul className="sidebar-list">
                {subreddits.map(subreddit => (
                    <li key={subreddit.id} className="sidebar-list-item">
                        {subreddit.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Sidebar;