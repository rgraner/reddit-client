import React, { useState, useEffect } from 'react';


export const Sidebar = ({ subreddits, onSubredditSelection, setSelectedSubreddit, selectedSubreddit }) => {
    const [isDropdown, setIsDropdown] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 641) {
                setIsDropdown(true);
            } else {
                setIsDropdown(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isDropdown) {
        return (
            <div className="sidebar">
                <h3 className="sidebar-title">Subreddits</h3>
                <select
                    className="subreddit-dropdown"
                    value={selectedSubreddit}
                    onChange={(e) => {
                        onSubredditSelection(e.target.value);
                        setSelectedSubreddit(e.target.value);
                    }}
                >
                    <option value="popular">popular</option>
                    {subreddits.map(subreddit => (
                        <option key={subreddit.data.id} value={subreddit.data.subreddit}>
                            {subreddit.data.subreddit}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
    
    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Subreddits</h3>
            <ul className="sidebar-list">
                {subreddits.map(subreddit => (
                    <li key={subreddit.data.id} className="sidebar-list-item" onClick={() => onSubredditSelection(subreddit.data.subreddit)}>
                        {subreddit.data.subreddit}
                    </li>
                ))}
            </ul>
        </div>
    );
};

