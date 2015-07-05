
'use strict';

var React = require('react');
var Link = require('react-router').Link;

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
            <li className={this.props.navSelection=='nav-section1'?linkClassSelected:linkClass} id='nav-section1'>
              <Link to='section1' activeClassName='left-nav-selected'>Section 1</Link>
            </li>
            <li className={this.props.navSelection=='nav-section2'?linkClassSelected:linkClass} id='nav-section2'>
              <Link to='section2' activeClassName='left-nav-selected'>Section 2</Link>
            </li>
            <li className={this.props.navSelection=='nav-section3'?linkClassSelected:linkClass} id='nav-section3'>
              <Link to='section3' activeClassName='left-nav-selected'>Section 3</Link>
            </li>            
          </ul>
        </nav>
      </section>
    );
  }
});
