import React from 'react';
import { PostCard } from './PostCard.js'


export const PostList = ({ posts }) => {
    return (
        <div>
            {posts.map(post=> (
                <PostCard
                    key={post.id}
                    title={post.title}
                    media={post.media}
                    date={post.date}
                    author={post.author}
                    commentsCount={post.commentsCount}
                />
            ))}
        </div>
    );
};