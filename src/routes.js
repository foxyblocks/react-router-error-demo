import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

const App = (props) => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      {props.children}
    </div>
  );
};

const Home = (props) => {
  return (
    <h1>Home Page</h1>
  );
};

const About = (props) => {
  return (
    <h1>About Page</h1>
  );
};

export default (
  <Route component={App} path="/">
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);
