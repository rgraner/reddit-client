import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header.js';
import { PostList } from '../components/PostList';
import { Sidebar } from '../components/Sidebar';
import '../index.css';


export const App = () => {
  const [posts, setPosts] = useState([]);
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://www.reddit.com/r/popular.json');
      const json = await res.json();
      setPosts(json.data.children);
      setSubreddits(json.data.children);
    };
    fetchData();
  }, []);

      return (
        <div className="app">
            <Header />
            <main className="main">
                <PostList posts={posts} />
                <Sidebar subreddits={subreddits} />
            </main>
        </div>
      )
}


