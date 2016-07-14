import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import useBasename from 'history/lib/useBasename';
import routes from './routes.js';

const history = useBasename(browserHistory)({ basename: '/my-app' });

window.onload = () => {
  render((
    <Router history={history}>
      {routes}
    </Router>
  ), document.getElementById('root'));
};
