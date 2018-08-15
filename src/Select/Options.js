import React from 'react';
import { arrayOf, object, func } from 'prop-types';

const Options = ({ options, onOptionMouseDown }) => (
  <div
    className="options"
  >
    {options.map(opt => (
      <option
        className="options__option"
        key={opt.name}
        onMouseDown={onOptionMouseDown}
        value={opt.value || opt.name}
        name={opt.name}
      >
        {opt.name}
      </option>
    ))}
  </div>
);

Options.propTypes = {
  options: arrayOf(object),
  onOptionMouseDown: func,
};

Options.defaultProps = {
  options: [],
  onOptionMouseDown: () => null,
};

export default Options;
