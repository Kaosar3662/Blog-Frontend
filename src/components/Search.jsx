/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Search = props => {
  const [search, setSearch] = useState('');
  function searchFunction(e) {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const searchData = props.data.filter(item =>
      item.title.toLowerCase().includes(query)
    );
    props.setFilteredData(searchData);
    props.setCurrentPage(1);
  }

  return (
    <input
      className="border p-2  "
      type="text"
      placeholder="Search here"
      onChange={e => searchFunction(e)}
    />
  );
};

export default Search;
