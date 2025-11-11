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
    < div className='relative'>
      <input
        className="border p-2 w-full max-w-80 rounded-lg focus:outline-1 outline-(--Brand-Green) pr-10 "
        type="text"
        placeholder="Search here"
        onChange={e => searchFunction(e)}
      />
      <span class="material-icons-outlined absolute right-1.5 top-2.5 text-(--Neutral-Black-900)">search</span>
    </div>
  );
};

export default Search;
