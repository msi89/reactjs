import {
  FETCH_ALL_POSTS,
  ADD_POST,
  REQUEST_START,
  REQUEST_ERROR,
} from '../actions/post';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_START: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case REQUEST_ERROR: {
      state = {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
      break;
    }
    case FETCH_ALL_POSTS: {
      state = {
        ...state,
        loading: false,
        posts: action.payload,
      };
      break;
    }
    case ADD_POST: {
      state = {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
      break;
    }
  }
  return state;
};

export default postReducer;
