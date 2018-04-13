import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import ReduxToastr from "react-redux-toastr";

import App from './containers/AppContainer';
import reducer from "./reducer";


const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const root = document.getElementById('react-root');
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
      />
    </div>
  </Provider>,
  root
);

// enable hot reloading
module.hot.accept();