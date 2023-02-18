import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header.js';
import { PostList } from '../components/PostList';
import { Sidebar } from '../components/Sidebar';
import '../index.css';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [subreddits, setSubreddits] = useState([]);
  const [selectedSubreddit, setSelectedSubreddit] = useState('popular');
  const [filteredPosts, setFilteredPosts] = useState([]);
   // state to update the dropdown when logo is clicked
   const [selectedDropdownSubreddit, setSelectedDropdownSubreddit] = useState('popular');


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://www.reddit.com/r/${selectedSubreddit}.json`);
      const json = await res.json();
      setPosts(json.data.children);
    };
    fetchData();
  }, [selectedSubreddit]);

  useEffect(() => {
    const fetchSubreddits = async () => {
      const res = await fetch('https://www.reddit.com/r/popular.json');
      const json = await res.json();
      setSubreddits(json.data.children);
    };
    fetchSubreddits();
  }, []);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const onSubredditSelection = subreddit => {
    setSelectedSubreddit(subreddit);
    setSelectedDropdownSubreddit(subreddit)
  };

  const onSearch = searchTerm => {
    if (posts.length > 0) {
      setFilteredPosts(
        posts.filter(post =>
          post.data.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  const onLogoClick = subreddit => {
    setSelectedSubreddit(subreddit);
    setSelectedDropdownSubreddit(subreddit);
  };

  return (
    <div className="">
        <Header onSearch={onSearch} onLogoClick={onLogoClick} />
        <main className="main">
          <PostList posts={filteredPosts} />
          <Sidebar
            subreddits={subreddits}
            selectedSubreddit={selectedDropdownSubreddit}
            onSubredditSelection={onSubredditSelection}
          />
        </main>
    </div>
  );
};

