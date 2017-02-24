import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Application from './Application';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}><Application /></Provider>,
  document.getElementById('root')
);
