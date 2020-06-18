import { INCREMENT, DECREMENT } from "../actions/counter";

const counterReducer = (
  state = {
    count: 0
  },
  action
) => {
  switch (action.type) {
    case INCREMENT:
      state = {
        count: state.count++
      };
      break;
    case DECREMENT:
      state = {
        count: state.count--
      };
      break;
    default:
      break;
  }
  return state;
};

export default counterReducer;
