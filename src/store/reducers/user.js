import { SET_AGE, SET_NAME } from "../actions/user";

const userReducer = (
  state = {
    name: "alice",
    age: 0
  },
  action
) => {
  switch (action.type) {
    case SET_NAME:
      state = {
        ...state,
        name: action.payload
      };
      break;
    case SET_AGE:
      state = {
        ...state,
        age: action.payload
      };
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
