import React from 'react';

const SelectButton = ({ onInputMouseDown }) => (
  <div
    className="select-button"
    onMouseDown={onInputMouseDown}
  >
    <div className="select-button__triangle" />
  </div>
);

export default SelectButton;
