// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import App from "./App";
import store from './store';
import { fetchUsers } from './store/actions/user';

store.subscribe(() => {
  // console.log("store updated", store.getState());
});

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
store.dispatch(fetchUsers());
