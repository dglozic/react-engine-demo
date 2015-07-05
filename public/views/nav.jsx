
'use strict';

var React = require('react');

module.exports = React.createClass({

  displayName: 'nav',

  render: function render() {
    var linkClass = 'left-nav-link';
    var linkClassSelected = linkClass + ' left-nav-selected';

    return (
      <section className='left-nav' id='left-nav'>
        <div className='left-nav-title'>{this.props.name}</div>
        <nav className='left-nav-links'>
          <ul>
            <li className={this.props.selection=='nav-section1'?linkClassSelected:linkClass} id='nav-section1'>
              <a href='/spa/section1'>Section 1</a>
            </li>
            <li className={this.props.selection=='nav-section2'?linkClassSelected:linkClass} id='nav-section2'>
              <a href='/spa/section2'>Section 2</a>
            </li>
            <li className={this.props.selection=='nav-section3'?linkClassSelected:linkClass} id='nav-section3'>
              <a href='/spa/section3'>Section 3</a>
            </li>            
          </ul>
        </nav>
      </section>
    );
  }
});
