// components/PostDetail.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const post = posts.find((p) => p.id === Number(id));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Post Detail</h2>
      {post && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{`User ID: ${post.userId}`}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
