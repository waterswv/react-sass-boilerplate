import React from 'react';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if(props.show){
    drawerClasses = 'side-drawer open'
  }
  return (
  <nav className={drawerClasses}>
    <ul>
      <li><a>Thigns About Wine</a></li>
      <li><a>Level Up</a></li>
    </ul>
  </nav>
);
}
export default sideDrawer;
