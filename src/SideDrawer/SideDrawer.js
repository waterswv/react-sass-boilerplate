import React from 'react';
import Select from '../Select/Select';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if(props.show){
    drawerClasses = 'side-drawer open'
  }
  return (
  <nav className={drawerClasses}>
    <ul>
      <li><a>Thigns About Wine</a></li>
      <li><Select options={[
          { name: 'Pallette', value: '1' },
          { name: 'Food', value: '2' },
          { name: 'Scent', value: '3' },
        ]}/></li>
      <li><a>Blog</a></li>
    </ul>
  </nav>
);
}
export default sideDrawer;
