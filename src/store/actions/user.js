import axios from 'axios';

export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const ADD_USER = 'ADD_USER';
export const REQUEST_START = 'REQUEST_REQUEST_START';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export function fetchUsers() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_START,
    });

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({
          type: FETCH_ALL_USERS,
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
}

export const addUser = (formdata) => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_START,
    });
    axios
      .post('https://jsonplaceholder.typicode.com/users', formdata)
      .then((response) => {
        dispatch({
          type: ADD_USER,
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
