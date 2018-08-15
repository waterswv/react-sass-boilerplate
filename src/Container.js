import React from 'react';

const container = props => (
<div className={`flex-container ${props.className}`}>
  {props.children}
  </div>
);

export default container;
