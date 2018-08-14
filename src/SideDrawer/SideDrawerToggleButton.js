import React from 'react';

const sideDrawerToggleButton = props => (
<button onClick={props.click} className="toggle-button">
  <div className="toggle-button__line"></div>
  <div className="toggle-button__line"></div>
  <div className="toggle-button__line"></div>
  </button>
);

export default sideDrawerToggleButton;
