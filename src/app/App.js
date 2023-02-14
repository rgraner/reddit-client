import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header.js';
import { PostList } from '../components/PostList';
import { Sidebar } from '../components/Sidebar';
import '../index.css';

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subreddits, setSubreddits] = useState([]);
  const [selectedSubreddit, setSelectedSubreddit] = useState('popular');
  const [filteredPosts, setFilteredPosts] = useState([]);


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

  console.log('filteredPosts: ', filteredPosts)

  return (
    <div className="">
        <Header onSearch={onSearch} />
        <main className="main">
          <PostList posts={filteredPosts} />
          <Sidebar subreddits={subreddits} onSubredditSelection={onSubredditSelection} />
        </main>
    </div>
  );
};

// {
//   posts.length === 0 ? (
//     <div>Loading...</div>
//   ) : (
//     <PostList posts={filteredPosts} />
//   )
// }
