// reducers/postReducer.js
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: '',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: '',
      };
    case actionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
