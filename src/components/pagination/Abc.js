import React, { useState, useEffect } from 'react';
import Posts from './Posts';

const Abc = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(
      response => response.json().then(data => {
        setPosts(data)
      })
    )


  }, []);


  return (
    <div className='container mt-5 mb-5'>
      <h1 className='text-primary text-white mb-3'>Page Pagination</h1>
      <Posts data={posts} />
    </div>
  );
};

export default Abc;