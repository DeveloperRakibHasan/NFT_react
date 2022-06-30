import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='text-gray-500 mb-4'>
      {posts.map(post => (
        <li key={post.id} className='px-4 py-4 border border-gray-800'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;