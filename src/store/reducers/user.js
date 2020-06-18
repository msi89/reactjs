import {
  FETCH_ALL_USERS,
  ADD_USER,
  REQUEST_START,
  REQUEST_ERROR,
} from '../actions/user';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
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
        users: [],
        error: action.payload,
      };
      break;
    }
    case FETCH_ALL_USERS: {
      state = {
        ...state,
        loading: false,
        users: action.payload,
      };
      break;
    }
    case ADD_USER: {
      state = {
        ...state,
        loading: false,
        users: [...state.users, ...action.payload],
      };
      break;
    }
  }
  return state;
};

export default userReducer;
