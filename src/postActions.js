// actions/postActions.js
import * as actionTypes from './actionTypes';

const fetchPostsRequest = () => ({
  type: actionTypes.FETCH_POSTS_REQUEST,
});

const fetchPostsSuccess = (posts) => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

const fetchPostsFailure = (error) => ({
  type: actionTypes.FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
