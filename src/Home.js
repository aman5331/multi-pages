// components/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Home</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/item/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{`${post.body.slice(0, 100)}...`}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
