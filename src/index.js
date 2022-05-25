import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchUsers } from './features/posts/users/usersSlice';

store.dispatch(fetchUsers())
// https://www.youtube.com/watch?v=NqzdVN2tyvQ&t=4603s
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

