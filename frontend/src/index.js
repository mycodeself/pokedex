import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import App from './containers/AppContainer';
import reducer from "./reducer";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const root = document.getElementById('react-root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);