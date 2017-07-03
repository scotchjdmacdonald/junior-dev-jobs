import React from 'react';
import { render } from 'react-dom';

import 'babel-polyfill';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import JobList from './components/JobList.js';
import JobView from './components/JobView.js';
import JobAdd from './components/JobAdd.js';

let store = configureStore();

const NoMatch = () => <h2>No match to the route</h2>;

render((
    <Provider store={store}>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </Provider>
  ),document.getElementById('app'));

function Container(props) {
  return (
    <div>
      <header>
        <div className="jd-page-title">
          Jobs
        </div>
        <Route path="/jobs/" render={() => (
          <Link to={`/`}
                className="jd-nav-link">
                back
          </Link>
        )} />
        <Route exact path="/" render={() => (
          <Link to={`/jobs/add`}
                className="jd-nav-link">
                Add
          </Link>
        )} />
      </header>
      <Route exact path="/" component={JobList} />
      <Route exact path="/jobs/add" component={JobAdd} />
      <Route exact path="/jobs/view/:jobId" component={JobView} />
    </div>
  );
}