import React from 'react';
import { Header } from '../components/Header.js';
import { PostList } from '../components/PostList';
import { Sidebar } from '../components/Sidebar';
import '../index.css';


export const App = () => {
    const posts = [
        {
          id: 1,
          title: 'Post 1',
          media: 'Image 1',
          date: '2022-01-01',
          author: 'Author 1',
          commentsCount: 10,
        },
        {
          id: 2,
          title: 'Post 2',
          media: 'Image 2',
          date: '2022-01-02',
          author: 'Author 2',
          commentsCount: 20,
        },
        // Add more posts here...
      ];

      const subreddits = [
        { id: 1, name: 'r/reactjs' },
        { id: 2, name: 'r/redux' },
        { id: 3, name: 'r/javascript' },
        // Add more subreddits here...
      ];

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

