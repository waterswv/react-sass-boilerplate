import React from 'react';
import SideDrawerToggleButton from '../SideDrawer/SideDrawerToggleButton';

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button"><SideDrawerToggleButton click={props.drawerToggleClickHandler}/></div>
      <div className="toolbar__logo"><a href="/">The Logo</a></div>
      <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Blog</a></li>
          </ul>
        </div>
    </nav>
  </header>
)

export default Toolbar;
