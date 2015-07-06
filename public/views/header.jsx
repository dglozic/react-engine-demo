
'use strict';

var React = require('react');

module.exports = React.createClass({

  displayName: 'header',

  render: function render() {
    var linkClass = 'header-link';
    var linkClassSelected = 'header-link header-selected';

    return (
      <section className='header' id='header'>
        <div className='header-title'>{this.props.title}</div>
        <nav className='header-links'>
          <ul>
            <li className={this.props.selection=='header-home'?linkClassSelected:linkClass} id='header-home'>
              <a href='/'>Home</a>
            </li>
            <li className={this.props.selection=='header-page2'?linkClassSelected:linkClass} id='header-page2'>
              <a href='/page2'>Page 2</a>
            </li>
            <li className={this.props.selection=='header-spa'?linkClassSelected:linkClass} id='header-spa'>
              <a href='/spa/section1'>React SPA</a>
            </li>            
          </ul>
        </nav>
      </section>
    );
  }
});
