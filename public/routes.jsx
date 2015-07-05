

'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;


var Section1 = require('./views/section1.jsx');
var Section2 = require('./views/section2.jsx');
var Section3 = require('./views/section3.jsx');

var routes = module.exports = (
  <Route path='/spa/' handler={Section1}>
    <Route name='section1' handler={Section1} />
    <Route name='section2' handler={Section2} />
    <Route name='section3' handler={Section3} />
  </Route>
);
