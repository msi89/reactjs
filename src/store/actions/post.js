import axios from 'axios';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const REQUEST_START = 'REQUEST_REQUEST_START';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_START,
    });
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        dispatch({
          type: FETCH_ALL_POSTS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: REQUEST_ERROR,
          payload: error.response,
        });
      });
  };
};

export const addPost = (formdata) => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_START,
    });
    axios
      .post('https://jsonplaceholder.typicode.com/posts', formdata)
      .then((response) => {
        dispatch({
          type: ADD_POST,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: REQUEST_ERROR,
          payload: error.response,
        });
      });
  };
};
