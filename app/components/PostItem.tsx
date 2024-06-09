"use client";
import React from 'react';
import Link from 'next/link';
import { Post } from '../types';

interface PostItemProps {
    post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    return (
        <div className="bg-gray-100 p-4 mb-4 rounded">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
            <Link href={`https://dummyjson.com/posts/${post.id}`} className="text-blue-600 hover:text-blue-800">Read more</Link>
        </div>
    );
};

export default PostItem;
