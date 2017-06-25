import React from 'react';
import { render } from 'react-dom';

import 'babel-polyfill';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import JobList from './components/JobList.js';
import JobEdit from './components/JobEdit.js';

let store = configureStore();

const NoMatch = () => <h2>No match to the route</h2>;

render((
    <Provider store={store}>
      <Router history={hashHistory} >
        <Route path="/jobs" component={JobList} />
        <Route path="/jobs/:id" component={JobEdit} />
        <Redirect from="/" to="/jobs" />
        <Route path="*" component={NoMatch} />
      </Router>
    </Provider>
  ),document.getElementById('app'));
