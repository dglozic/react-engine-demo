
'use strict';

var Layout = require('./layout.jsx');
var React = require('react');

module.exports = React.createClass({

  render: function render() {

    return (
      <Layout {...this.props}>
        <h2>Home</h2>
        <p>An example of a plain server-side ReactJS page.</p>
      </Layout>
    );
  }
});
