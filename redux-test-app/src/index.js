import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {mainReducer} from "./redux/mainReducer";
import {filterInputMiddleware} from "./redux/middleware/filter.middleware";


const store = createStore(mainReducer,
    compose(
        applyMiddleware(
            thunk,
            filterInputMiddleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))


render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();