import React from 'react';
import SideDrawerToggleButton from '../SideDrawer/SideDrawerToggleButton';
import Select from '../Select/Select';

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button"><SideDrawerToggleButton click={props.drawerToggleClickHandler}/></div>
      <div className="toolbar__logo"><a href="/">The Logo</a></div>
      <div className="spacer" />
        <div className="toolbar__navigation-items" >
          <ul>
            <li className="active"><a href="/"><div className="item-text">Things about Wine</div></a></li>
            <li><Select options={[
  { name: 'option1', value: '1' },
  { name: 'option2', value: '2' },
  { name: 'option3', value: '3' },
]} /></li>
            <li><a href="/"><div className="item-text">Level Up</div></a></li>
            <li><a href="/"><div className="item-text">Blog</div></a></li>
            <li><a href="/"><div className="item-text">P</div></a></li>

          </ul>
        </div>
    </nav>
  </header>
)

export default Toolbar;
