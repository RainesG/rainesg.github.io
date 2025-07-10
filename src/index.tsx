import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import 'raines-basic-components/dist/index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div')
);

const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
