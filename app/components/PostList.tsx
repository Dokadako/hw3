"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import { Post } from '../types';

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then(response => setPosts(response.data.posts))
        .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
        {posts.map(post => (
            <PostItem key={post.id} post={post} />
        ))}
        </div>
    );
};

export default PostList;
