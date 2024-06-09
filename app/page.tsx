
import React from 'react';
import PostList from './components/PostList';
import Layout from './layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1 className='text-2xl font-semibold mb-2 text-center'>Posts</h1>
      <PostList />
    </Layout>
  );
};

export default HomePage;
