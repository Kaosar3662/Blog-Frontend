import React from 'react';

const Filter = (props) => {
  return (
    <div>
      <select name="" id="category"></select>
      <option value={props.data.category}>{props.data.category}</option>
    </div>
  );
};

export default Filter;