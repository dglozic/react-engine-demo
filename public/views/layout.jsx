
'use strict';

var React = require('react');
var Header = require('./header.jsx');

module.exports = React.createClass({

  render: function render() {

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>
            {this.props.title}
          </title>
          <link rel="stylesheet" href="/css/styles.css"/>
        </head>
        <body>
          <Header {...this.props}></Header>
          <div className="main-content">
             {this.props.children}
          </div>
        </body>
        <script src='/bundle.js'></script>
      </html>
    );
  }
});
