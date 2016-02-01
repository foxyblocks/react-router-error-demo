import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHistory, useBasename } from 'history';
import routes from './routes.js';


const browserHistory = useRouterHistory(useBasename(createHistory))({
  basename: '/my-app/',
});

window.onload = () => {
  render((
    <Router history={browserHistory}>
      {routes}
    </Router>
  ), document.getElementById('root'));
};
