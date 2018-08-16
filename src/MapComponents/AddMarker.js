import React from 'react';

const addMarker = props => {
  return (
    <button className="button button-primary" onClick={props.click}>
        {props.winery.name}
      </button>
  )
}

export default addMarker;
