import React from 'react';
import { render } from 'react-dom';

import 'babel-polyfill';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import JobList from './components/JobList.js';
import JobEdit from './components/JobEdit.js';
import JobAdd from './components/JobAdd.js';

let store = configureStore();

const NoMatch = () => <h2>No match to the route</h2>;

render((
    <Provider store={store}>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
      {/*<Router history={hashHistory} >
        <Route path="/jobs" component={JobList} />
        <Route path="/jobs/:id" component={JobEdit} />
        <Redirect from="/" to="/jobs" />
        <Route path="*" component={NoMatch} />
      </Router>*/}
    </Provider>
  ),document.getElementById('app'));

function Container(props) {
  return (
    <div>
      <h1>JuniorDev Jobs</h1>
      <Route path="/jobs/" render={() => (
         <Link to={`/`}><h2>back</h2></Link>
      )} />
      <Route exact path="/" render={() => (
        <Link to={`/jobs/add`}><h2>Add</h2></Link>
      )} />
      <Route exact path="/jobs/add" render={() => (
        <h2>Submit</h2>
      )} />
      <Route exact path="/" component={JobList} />
      <Route exact path="/jobs/add" component={JobAdd} />
      <Route exact path="/jobs/view/:jobId" component={JobEdit} />
    </div>
  );
}