import React from 'react';
import { PostCard } from './PostCard.js'


export const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map(post=> (
                <PostCard
                    key={post.data.id}
                    title={post.data.title}
                    media={post.data.url_overridden_by_dest}
                    date={post.data.created_utc}
                    author={post.data.author}
                    commentsCount={post.data.num_comments}
                    subreddit={post.data.subreddit_name_prefixed}
                />
            ))}
        </div>
    );
};