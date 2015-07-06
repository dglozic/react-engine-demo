
'use strict';

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

  displayName: 'nav',

  render: function render() {
    var activeClass = 'left-nav-selected';

    return (
      <section className='left-nav' id='left-nav'>
        <div className='left-nav-title'>{this.props.name}</div>
        <nav className='left-nav-links'>
          <ul>
            <li className='left-nav-link' id='nav-section1'>
              <Link to='section1' className={this.props.navSelection==='nav-section1'?activeClass:''} 
                    activeClassName={activeClass}>Section 1</Link>
            </li>
            <li className='left-nav-link' id='nav-section2'>
              <Link to='section2' className={this.props.navSelection==='nav-section2'?activeClass:''} 
                    activeClassName={activeClass}>Section 2</Link>
            </li>
            <li className='left-nav-link' id='nav-section3'>
              <Link to='section3' className={this.props.navSelection==='nav-section3'?activeClass:''} 
                    activeClassName={activeClass}>Section 3</Link>
            </li>       
          </ul>
        </nav>
      </section>
    );
  }
});
